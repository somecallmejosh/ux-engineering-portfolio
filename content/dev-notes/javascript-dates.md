---
slug: javascript-dates
publishedAt: 2025-05-10
title: "Dealing with Dates in JavaScript"
description: "JavaScript dates are like that one coworker who means well but always shows up late and forgets daylight savings."
tags: [javascript]
image: "https://res.cloudinary.com/dwjulenau/image/upload/dpr_auto,f_auto,fl_progressive,q_auto/v1747076064/josh-portfolio/assets_task_01jv2xcacpf9e8442cz03j7b86_1747075929_img_0.webp"
image_alt: "An illustration of me learning Javascript."
---
JavaScript dates are like that one coworker who means well but always shows up late and forgets daylight savings. This guide covers the essential things to know so you can spend less time debugging `new Date()` weirdness and more time building features that actually matter.

## The Basics: Date 101
```js
const now = new Date(); // Current date and time
const fromString = new Date("2025-05-07"); // ISO format preferred
const fromParts = new Date(2025, 4, 7); // Month is zero-based (4 = May)
```

### Important Gotchas:

- Month is zero-based (0 = January)
- Avoid `Date.parse("MM/DD/YYYY")`. Results can vary by browser and locale
- ISO format (YYYY-MM-DD) is your safest bet

## Time Zones: Where Things Get Weird
JavaScript Date objects are always created in local time, but toISOString() and some other methods use UTC.

```js
const date = new Date("2025-05-07T12:00:00Z");
console.log(date.toISOString()); // UTC
console.log(date.toLocaleString()); // Local time
```

### Common Pitfalls:

- Backend sends UTC → JS auto-converts to local
- `getHours()` returns local time
- `getUTCHours()` returns UTC

### Use Cases:

- Store dates in UTC (or ISO 8601 format)
- Convert to local time only when displaying

## Internationalization (i18n): Showing Dates the Right Way

Use `Intl.DateTimeFormat` or `toLocaleString()` for human-friendly, locale-aware formatting.

```js
const date = new Date("2025-05-07T12:00:00Z");

date.toLocaleDateString("en-US"); // "5/7/2025"
date.toLocaleDateString("fr-FR"); // "07/05/2025"

new Intl.DateTimeFormat("ja-JP", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long"
}).format(date);
// "2025年5月7日水曜日"
```

### Best Practice:

- Let the browser handle locale formatting
- Use language and region codes (`en-GB`, `es-MX`, etc.)

## Formatting Dates for Display
Native Date formatting is limited. Consider a library for consistency and flexibility:

### Native (limited)
```js
date.toLocaleString("en-US", {
  year: "numeric",
  month: "short",
  day: "2-digit"
});
// "May 07, 2025"
```

### Popular Libraries:

- date-fns – Tree-shakable, modern, functional
- luxon – Timezone and i18n support out of the box
- dayjs – Lightweight Moment.js alternative

```js
import { format } from "date-fns";
format(new Date(), "yyyy-MM-dd"); // "2025-05-07"
```

## Time Zone Support

Native Intl with timeZone option:

```js
date.toLocaleString("en-US", { timeZone: "America/New_York" });
// "5/7/2025, 8:00:00 AM"
```
Libraries like Luxon:

```js
import { DateTime } from "luxon";
DateTime.fromISO("2025-05-07T12:00:00Z")
  .setZone("America/Los_Angeles")
  .toLocaleString(DateTime.DATETIME_MED);
// "May 7, 2025, 5:00 AM"
```

### Common Gotchas Recap
::OverflowX
| Gotcha                                   | Why It Happens                         | Solution                                      |
| ---------------------------------------- | -------------------------------------- | --------------------------------------------- |
| `new Date("2025-05-07")` is off by a day | Browser parses as UTC, shifts to local | Use full ISO with time: `2025-05-07T00:00:00` |
| Formatting doesn't reflect language      | Defaults to system locale              | Use `toLocaleString(locale)`                  |
| Data from API is UTC, UI shows local     | JS converts automatically              | Normalize time zone on display                |
| `Date.now()` vs `new Date()`             | One is a timestamp, one is an object   | Use `Date.now()` for math                     |
::

## When You Need Testable, Predictable Dates

- Avoid using new Date() directly in components
- Wrap it in a function so you can mock it for testing

```js
export function getNow() {
  return new Date();
}
```

## Real-World Challenge: Saving Dates Accurately
In both the [IVFCRYO](/projects/ivfcryo) and [Logatot](/projects/logatot) projects, we ran into a deceptively simple problem: recording a date or timestamp and having it mean the same thing for everyone involved. Turns out, when users in different time zones are saving "the same" date, you're either:

- accidentally shifting it behind or ahead depending on the user's device time,
- or storing the same calendar date but ending up with inconsistent meaning across systems.

### What Went Wrong
For example, if a user entered 2025-05-07 as the event date:

```js
new Date("2025-05-07"); // gets parsed as midnight UTC
```

That might actually render as May 6, 2025, 8:00 PM if you're on the East Coast of the U.S. That's a big problem for things like:

- logging critical biological specimen milestones (IVFCRYO),
- recording daily child care activities like naps and meals (Logatot).

### The Fix: Save the Time Zone
Our workaround? Ask users to explicitly set their time zone as part of their profile. Then we:

Capture the exact time entered, using JavaScript to preserve local meaning.

Use the saved time zone to adjust that time if it needs to be stored or compared in UTC (e.g., for reporting, syncing across systems, etc.).

```js
const localTime = new Date(); // This reflects user's local device time
const utcTime = localTime.toISOString(); // Save this in DB
```

### Separately, we store:

```js
Intl.DateTimeFormat().resolvedOptions().timeZone
// Example: "America/New_York"
```

Now, when showing dates later, we can rehydrate them like so:

```js
new Date(storedUtcTime).toLocaleString("en-US", {
  timeZone: userTimeZone
});
```

### Optional Workarounds (Without Asking for Time Zone)
If asking for a time zone feels like too much user friction, you have a couple options:

- Auto-detect the browser time zone on login or profile save with `Intl.DateTimeFormat().resolvedOptions().timeZone`.
- Store only the local date parts (year, month, day) as separate fields and reconstruct them as needed, avoiding Date parsing quirks entirely. This is how Ruby on Rails used to handle dates in the scaffolding process. It's a lot easier on the backend, but it can be a pain for the user.
- Use `Date.getFullYear()`, `getMonth()`, and `getDate()` to safely extract date parts based on the device's local time.

## Takeaways
Plain Date objects can behave inconsistently depending on parsing method and user time zone.

Always be clear: are you saving a point in time, or a calendar date as experienced by the user?

### Either:

- convert everything to UTC + store time zone, or
- treat dates as local data and avoid converting to Date objects unless absolutely necessary.
