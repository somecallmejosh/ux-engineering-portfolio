---
slug: supabase-auth
publishedAt: 2025-12-13
title: "Setting Up Supabase Auth in Nuxt"
description: 'Add secure Supabase auth to Nuxt: env keys, redirects, sign‑in/callback, profiles with RLS + trigger, role‑based middleware, useProfile, logout.'
tags: [nuxt, supabase, auth]
image: https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1765652503/josh-portfolio/20251213_1401_Secure_Web_Development_simple_compose_01kcchax0reghvscgheh1w0nh8.png
image_alt: 'Setting Up Supabase Auth in Nuxt'
---
::TagMenu{tag="supabase" collection="dev_notes"}
Supabase
::

A solid auth foundation saves time and prevents common security pitfalls. Supabase handles identity, sessions, and secure storage so you don't have to build an auth system from scratch. Nuxt's module gives you simple, SSR-aware helpers (`useSupabaseClient`, `useSupabaseSession`) that make auth predictable across pages and middleware.

This guide sets up Supabase Auth in a Nuxt project with minimal friction. It uses `@nuxtjs/supabase`. It also sets up a profiles table with roles like admin and client.

## Create a Supabase Project

1. Go to [Supabase](https://supabase.com/) and create a new project.

2. Add the following to your `.env` file:

```bash
SUPABASE_URL=https://[URL].supabase.com
SUPABASE_SECRET_KEY=[SECRET_KEY]
```

- `SUPABASE_KEY` is what the Nuxt module expects by default.
- `SUPABASE_SECRET_KEY` is only for server routes.

These values connect your app to the correct Supabase project. The URL identifies your project; the secret key is for backend-only use (keep it out of the client bundle). For browser calls, the Nuxt module uses the public `SUPABASE_KEY`, which is scoped by Row Level Security policies to keep data safe.

## Install the Nuxt Supabase Module

`npx nuxi@latest module add supabase`

Using the module wires the Supabase client into Nuxt and exposes composables, so you avoid manual setup and get reliable session handling across SSR and client navigation.

## Configure Auth Redirects

By default, the Supabase module uses `/login` as the redirect URL after sign-in and sign-out. You can change this in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase'],

  supabase: {
    redirect: true,
    redirectOptions: {
      login: '/auth/sign-in',
      callback: '/auth/callback'
    }
  }
})
```

Explicit redirects keep the flow consistent for password, magic link, and OAuth sign-ins. Picking routes you control avoids confusing bounce loops and makes it clear where users land during and after authentication.

## Create Auth Pages

### Sign In Page

Start with a simple email/password form so you can validate your flow quickly. You can layer in magic links or OAuth providers later without changing the rest of the stack. Clear error messages help users recover and reduce support friction.

Create a `pages/auth/sign-in.vue` file for the sign-in page:

```vue
<script setup lang="ts">
const supabase = useSupabaseClient()

const email = ref('')
const password = ref('')
const errorMsg = ref('')

async function signIn() {
  errorMsg.value = ''
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
  if (error) {
    errorMsg.value = error.message
    return
  }
  await navigateTo('/app')
}
</script>

<template>
  <div>
    <h1>Sign in</h1>

    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />

    <button @click="signIn">Sign in</button>

    <p v-if="errorMsg">{{ errorMsg }}</p>
  </div>
</template>
```


### Auth Callback Page

The callback route is a safe place to complete auth handshakes. It keeps users on a known page while sessions finalize, preventing a blank screen or a confusing redirect chain. We'll use this for magic links and OAuth redirects.

Create a `pages/auth/callback.vue` file:

```vue
<script setup lang="ts">
const session = useSupabaseSession()

watchEffect(async () => {
  if (session.value?.user) {
    await navigateTo('/app')
  }
})
</script>

<template>
  <div>
    <h1>Signing you in…</h1>
  </div>
</template>
```

## Create the Profiles Table

In Supabase, create a new table called `profiles` in the SQL editor:

```sql
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  full_name text,
  avatar_url text,
  role text not null default 'client' check (role in ('admin','client'))
);

alter table public.profiles enable row level security;
```

Separating `profiles` from `auth.users` lets you evolve user metadata (name, avatar, role) without touching core auth. Adding Row Level Security early ensures your queries are safe by default: users can only see their own row.

### Auto Create Profiles on Sign Up

```sql
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, avatar_url, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    new.raw_user_meta_data->>'avatar_url',
    'client'
  );
  return new;
end;
$$;
```

An automatic profile record prevents missing data and race conditions after sign-up. Your app can assume a profile exists and avoid sprinkling "if no profile, create one" logic everywhere.

### Create Trigger for New Users

The trigger ties profile creation to the moment a user is added, which keeps your data consistent and reduces manual setup work.

```sql
drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();
```



### Add Row Level Security Policies

These policies enforce the "only me" rule for reading and updating a profile. Even if a client tries to query another user's row, the database denies access—security lives on the backend, not just in UI checks.

```sql
drop policy if exists "profiles: read own" on public.profiles;
create policy "profiles: read own"
on public.profiles
for select
using (auth.uid() = id);

drop policy if exists "profiles: update own" on public.profiles;
create policy "profiles: update own"
on public.profiles
for update
using (auth.uid() = id)
with check (auth.uid() = id);
```



### Prevent Users from Changing Their Role

Roles control access, so they should only change through trusted server paths. This guard stops accidental or malicious privilege escalation from the client.

```sql
create or replace function public.prevent_role_change()
returns trigger language plpgsql as $$
begin
  if new.role is distinct from old.role and auth.uid() = old.id then
    raise exception 'role cannot be changed';
  end if;

  return new;
end;
$$;

drop trigger if exists profiles_prevent_role_change on public.profiles;

create trigger profiles_prevent_role_change
before update on public.profiles
for each row execute procedure public.prevent_role_change();
```

## Create an Admin and a Client User

In the Supabase dashboard, to to Authentication > Users -> Add User. Create a new user with the email `admin@example.com` and a secure password, and another with the email `client@example.com` and a secure password.

Seeding one admin and one client account makes it easy to test role-based access before you build an admin UI. Use real-world emails in production; these examples are just for development.

### Promote the Admin User

```sql
update public.profiles p
set role = 'admin'
from auth.users u
where u.id = p.id
  and u.email = 'admin@admin.com';
```

#### Verify Admin Status

```sql
select u.email, p.role
from auth.users u
join public.profiles p on p.id = u.id
where u.email in ('admin@admin.com', 'client@client.com');
```

You should see that the admin user has the role `admin` and the client user has the role `client`.

Promote, then verify. A quick check confirms your seed data and policies are wired correctly before protecting pages.

## Load the User Profile in Nuxt

In your Nuxt app, you can load the user's profile after they sign in. Here's an example of how to do that in a page component:

```vue
<script setup lang="ts">
// Use the session user ID for database queries
const sessionUserId = useSupabaseSession().value?.user?.id
</script>
```

Use the session's user ID when querying the database so you always fetch the authoritative profile for the current user. Avoid trusting client-side role claims alone. Read the profile to be sure.

## Create a useProfile Composable

Centralizing profile fetching in a composable keeps pages lean and avoids duplicated loading/error logic.

`composables/useProfile.ts`

```ts
export function useProfile() {
  const supabase = useSupabaseClient()
  const session = useSupabaseSession()

  const profile = useState<any | null>('profile', () => null)
  const loading = useState(false)
  const error = useState<string | null>('profile.error', () => null)

  const userId = computed(() => session.value?.user?.id ?? null)

  async function refresh() {
    error.value = null

    if (!userId.value) {
      profile.value = null
      return
    }

    loading.value = true
    const { data, error: e } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId.value)
      .maybeSingle()

    profile.value = data ?? null
    error.value = e?.message ?? null
    loading.value = false
  }

  watch(userId, () => refresh(), { immediate: true })
  // The `watch` on `userId` ensures the UI updates immediately when the session changes.

  return { profile, loading, error, refresh }
}
```

## Protect Routes with Middleware

Route guards stop unauthenticated users before they ever see protected content, which prevents brief flashes of private pages and keeps navigation predictable.

Create a middleware file at `middleware/auth.ts`:

```ts
export default defineNuxtRouteMiddleware(() => {
  const session = useSupabaseSession()
  if (!session.value?.user) {
    return navigateTo('/auth/sign-in')
  }
})
```

### Admin Middleware

Admin-only pages should check the server-backed `profile.role`. Sending non-admins to a clear "not authorized" route is friendlier than failing silently.

Create a middleware file at `middleware/admin.ts`:

```ts
export default defineNuxtRouteMiddleware(async () => {
  const session = useSupabaseSession()
  if (!session.value?.user) {
    return navigateTo('/auth/sign-in')
  }

  const { profile, refresh } = useProfile()
  if (!profile.value) await refresh()

  if (profile.value?.role !== 'admin') {
    return navigateTo('/not-authorized')
  }
})
```

### Add Auth Middleware to Protected Pages

Attach middleware at the page level where it's needed. This keeps access rules close to the code they protect and makes intent obvious to future you (and teammates).

```vue
<script setup>
definePageMeta({ middleware: ['admin'] })
</script>
```

## Logout Functionality

Signing out clears the session and returns users to a safe starting point. It also helps prevent stale state issues if you're testing across multiple accounts.

This can be done anywhere in your app:

```ts
const supabase = useSupabaseClient()

async function logout() {
  await supabase.auth.signOut()
  await navigateTo('/auth/sign-in')
}
```
