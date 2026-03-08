---
slug: javascript-dates
publishedAt: 2025-05-10
title: "Dealing with Dates in JavaScript"
description: "JavaScript's Date object is straightforward until it isn't. Time zones, locale formatting, and parsing quirks trip up even experienced developers."
tags: [javascript, dates]
image: "/images/dev-notes/javascript-dates.webp"
image_alt: "A cartoon illustration of a developer sitting at a desk surrounded by floating clock and calendar icons."
---
JavaScript's `Date` object is straightforward until it isn't. Time zones, locale formatting, and parsing quirks trip up even experienced developers. This guide covers the essentials so you can spend less time debugging `new Date()` and more time shipping features.

## Creating dates

```js
const now = new Date(); // Current date and time
const fromString = new Date("2025-05-07"); // ISO format preferred
const fromParts = new Date(2025, 4, 7); // Month is zero-based (4 = May)
```

### Common pitfalls

- Month is zero-based (0 = January, 11 = December).
- Avoid `Date.parse("MM/DD/YYYY")`. Results vary by browser and locale.
- ISO format (`YYYY-MM-DD`) is your safest bet.

## Time zones

JavaScript `Date` objects are always created in local time, but `toISOString()` and some other methods use UTC.

```js
const date = new Date("2025-05-07T12:00:00Z");
console.log(date.toISOString()); // UTC
console.log(date.toLocaleString()); // Local time
```

### What to watch for

- When the backend sends UTC, JavaScript auto-converts to local time.
- `getHours()` returns local time; `getUTCHours()` returns UTC.

### Best practice

- Store dates in UTC or ISO 8601 format.
- Convert to local time only when displaying.

## Internationalization: showing dates the right way

Use `Intl.DateTimeFormat` or `toLocaleString()` for locale-aware formatting.

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

- Let the browser handle locale formatting.
- Use language and region codes (`en-GB`, `es-MX`, and so on).

## Formatting dates for display

Native date formatting is limited. Consider a library for consistency and flexibility.

### Native (limited)

```js
date.toLocaleString("en-US", {
  year: "numeric",
  month: "short",
  day: "2-digit"
});
// "May 07, 2025"
```

::CallOut
I have more in-depth notes on date formatting in this post on [common string methods I use](/dev-notes/common-string-methods-i-use/#date-formatting).
::

### Popular libraries

- **date-fns** — tree-shakable, modern, functional
- **Luxon** — timezone and i18n support out of the box
- **Day.js** — lightweight Moment.js alternative

```js
import { format } from "date-fns";
format(new Date(), "yyyy-MM-dd"); // "2025-05-07"
```

## Time zone support

Use the native `Intl` API with a `timeZone` option:

```js
date.toLocaleString("en-US", { timeZone: "America/New_York" });
// "5/7/2025, 8:00:00 AM"
```

Or use Luxon for more control:

```js
import { DateTime } from "luxon";
DateTime.fromISO("2025-05-07T12:00:00Z")
  .setZone("America/Los_Angeles")
  .toLocaleString(DateTime.DATETIME_MED);
// "May 7, 2025, 5:00 AM"
```

### Common gotchas recap

::OverflowX
| Gotcha                                   | Why it happens                         | Solution                                      |
| ---------------------------------------- | -------------------------------------- | --------------------------------------------- |
| `new Date("2025-05-07")` is off by a day | Browser parses as UTC, shifts to local | Use full ISO with time: `2025-05-07T00:00:00` |
| Formatting doesn't reflect language      | Defaults to system locale              | Use `toLocaleString(locale)`                  |
| Data from API is UTC, UI shows local     | JavaScript converts automatically      | Normalize time zone on display                |
| `Date.now()` vs `new Date()`             | One is a timestamp, one is an object   | Use `Date.now()` for math                     |
::

## Writing testable, predictable date logic

- Avoid using `new Date()` directly in components.
- Wrap it in a function so you can mock it in tests.

```js
export function getNow() {
  return new Date();
}
```

## Saving dates accurately: a real-world challenge

In [IVFCRYO](/projects/ivfcryo/) and other projects, I ran into a deceptively simple problem: recording a date or timestamp and having it mean the same thing for everyone involved. When users in different time zones save "the same" date, you either:

- accidentally shift it forward or backward depending on the user's device time, or
- store the same calendar date but end up with inconsistent meaning across systems.

### What went wrong

If a user entered `2025-05-07` as the event date:

```js
new Date("2025-05-07"); // Parsed as midnight UTC
```

That renders as May 6, 2025, 8:00 PM for someone on the US East Coast. For apps that record critical milestones (like IVFCRYO's biological specimen tracking), that's a significant problem.

### The fix: save the time zone

Ask users to set their time zone in their profile. Then:

1. Capture the exact time entered, using JavaScript to preserve local meaning.
2. Use the saved time zone to adjust that time when storing or comparing in UTC (for reporting, syncing, and so on).

```js
const localTime = new Date(); // Reflects user's local device time
const utcTime = localTime.toISOString(); // Save this in the database
```

Store the user's time zone separately:

```js
Intl.DateTimeFormat().resolvedOptions().timeZone
// Example: "America/New_York"
```

Then rehydrate dates for display:

```js
new Date(storedUtcTime).toLocaleString("en-US", {
  timeZone: userTimeZone
});
```

### Alternatives if you can't ask for a time zone

- Auto-detect the browser time zone on login or profile save: `Intl.DateTimeFormat().resolvedOptions().timeZone`.
- Store only the local date parts (year, month, day) as separate fields and reconstruct them as needed. This avoids `Date` parsing quirks entirely. Ruby on Rails used this approach in its scaffolding.
- Use `Date.getFullYear()`, `getMonth()`, and `getDate()` to safely extract date parts based on the device's local time.

## Takeaways

Plain `Date` objects behave inconsistently depending on the parsing method and the user's time zone.

Always be clear about what you're storing: a point in time, or a calendar date as the user experiences it.

Either:

- convert everything to UTC and store the time zone, or
- treat dates as local data and avoid converting to `Date` objects unless necessary.
