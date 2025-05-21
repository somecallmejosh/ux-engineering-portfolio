---
slug: common-string-methods-i-use
publishedAt: 2025-05-21
title: "JavaScript String Methods"
description: "There are many libraries for string manipulation, but I often find myself rewriting these simple functions in every new code base."
tags: [javascript]
image: "https://res.cloudinary.com/dwjulenau/image/upload/dpr_auto,f_auto,fl_progressive,q_auto/v1747840698/josh-portfolio/assets_task_01jvspmqeyek1ag6z579gaqhb0_1747840627_img_0.webp"
image_alt: "A whimsical illustration of string manipulation in JavaScript, featuring playful characters."
---
Sure, there are many libraries and built-in methods for string manipulation, but I often find myself rewriting these simple functions in every new code base. Here are some of them:

## Truncate String
This function truncates a string to a specified length and adds an ellipsis if it exceeds that length. I use this often for displaying text in UI elements where space is limited. I try to keep accessibility and try to include the full string in an `.sr-only` element, a tooltip, or by some other means.

```js
function truncateString(str, maxLength = 50) {
  // Check if the string is valid and not empty
  // If not, return an empty string

  // I use this early return on pretty much
  // every string I manipulate
  if (typeof str !== "string" || !str) {
    return ""
  }

  if (str.length <= maxLength) {
    return str
  }

  // I add the ellipsis to the end of the string
  // to make it clear that the string has been truncated
  // and to avoid confusion with the original string.
  return `${str.slice(0, maxLength)}...`
}
```

## Remove Whitespace, Replace Characters

```js
function replaceCharacter(str, char, replacement) {
  // Check if the string is valid and not empty
  if (typeof str !== "string" || !str) {
    return ""
  }

  return str.split(char).join(replacement)
}
```

## Check if String is an Email

Sometimes I need to validate an email address format. Here's a simple regex-based function to do that.

```js
function checkIsEmail(str) {
  // Check if the string is valid and not empty
  if (typeof str !== "string" || !str) {
    return ""
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailPattern.test(str)
}
```

## Check if String is a URL

When you need to check if a string is a valid URL, you can use this function. It uses a regex pattern to validate the URL format.

```js
function checkIsUrl(str) {
  if (typeof str !== "string" || !str) {
    return ""
  }
  const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
  return urlPattern.test(str)
}
```

## Title Case a String that is Hyphenated

This function capitalizes the first letter of each part of a hyphenated string. I use this often with breadcrumbs or other UI elements where I need to display a hyphenated string in a more readable format.

```js
function capitalizeHyphenated(value) {
  // Check if the string is valid and not empty
  if (typeof str !== "string" || !str) {
    return ""
  }

  return value
    .split("-")
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join("-")
}
```

## Date Formatting

::CallOut
If you can use a date library like [date-fns](https://date-fns.org/) or [day.js](https://day.js.org/), I highly recommend it. They handle a lot of edge cases and provide a more robust solution for date manipulation. If not, here are some simple functions to help you with date formatting. Also, shoutout to [Ross Hazelett](https://www.linkedin.com/in/ross-hazelett/) for the inspiration on this section. I took a lot of his ideas and made them my own.
::

Date formatting can be tricky, especially when dealing with different formats. Here's a couple of  functions that convert a date string from one format to another. It's also good to infer the input format if not provided.


### Is the string a date?
This function checks if a string is a valid date. It uses the Date constructor to parse the string and checks if the resulting date is valid. It also checks for common date formats.

```js
function checkIfDate(value) {
  // Check if the string is valid and not empty
  if (typeof value !== "string" || !value) {
    return false
  }
  // Attempt to create a Date object from the value
  const date = new Date(value);
  // Check if it's a valid date and not just 'Invalid Date'
  // Also, ensure the string representation of the parsed date isn't just a number (e.g., "123" can become a date)
  return !isNaN(date.getTime()) && value.match(/(\d{4}-\d{2}-\d{2}|\d{2}-\d{2}-\d{4}|\d{2}\/\d{2}\/\d{4}|\d{4}\/\d{2}\/\d{2})/);
}
```

### Infer Date Format
This function infers the date format from a string. It checks for common delimiters and formats, and returns the inferred format. It also handles cases where the month or day values are too large.

```js
function inferDateFormat(dateStr) {
  // Check if the string is valid and not empty
  if (typeof dateStr !== "string" || !dateStr) {
    return ""
  }
  dateStr = dateStr.toLowerCase()
  // Determine the delimiter used in the date string
  const delimiter = dateStr.includes("-") ? "-" : dateStr.includes("/") ? "/" : null
  if (!delimiter) throw new Error("Unsupported date format, lacks delimiter")

  // break up dateStr into components array ie [ "mm", "dd", "yyyy" ]
  const dateStrComponents = dateStr.split(/[-\/]/)

  // if we can't infer, we fall back on the most common US format
  const defaultFormat = "mm-dd-yyyy"
  let inferredFormat

  // looking for a year-first format (yyyy-mm-dd)
  if (dateStrComponents[0].length == 4) {
    inferredFormat = "yyyy" + delimiter + "mm" + delimiter + "dd"
    return inferredFormat
  }
  // all else must be year-last format (mm-dd-yyyy or dd-mm-yyyy)
  // if both values greater than 12 this is not a real date
  if (parseInt(dateStrComponents[0]) > 12 && parseInt(dateStrComponents[1]) > 12) {
    throw new Error("Unsupported date format, month or day value is too large")
  }
  // if second value is greater than 12 assume mm-dd-yyyy
  if (parseInt(dateStrComponents[1]) > 12) {
    inferredFormat = "mm" + delimiter + "dd" + delimiter + "yyyy"
    return inferredFormat
  }
  // if first value is greater than 12 assume dd-mm-yyyy (UK)
  if (parseInt(dateStrComponents[0]) > 12) {
    inferredFormat = "dd" + delimiter + "mm" + delimiter + "yyyy"
    return inferredFormat
  }
  // default case - both mm and dd values are 12 or below
  // we can't infer other than year being last
  return defaultFormat
}
```

### Convert Date Format
This function converts a date string from one format to another. It uses the Date constructor to parse the string and then formats it according to the specified output format. It also infers the input format if not provided. <em>Hint... this is where a library shines. Without it, you'd still need to manually parse components if inputFormat isn't a standard recognized by Date constructor.</em>

```js
function convertDateFormat(dateStr, outputFormat, inputFormat) {
  // Check if the string is valid and not empty
  if (typeof dateStr !== "string" || !dateStr) {
    return ""
  }
  // A simple approach for common formats if you MUST stick to native JS:
  // Try to parse with Date object directly.
  let date = new Date(dateStr);

  // If initial parsing fails, try to infer and re-parse.
  if (isNaN(date.getTime()) && !inputFormat) {
    inputFormat = inferDateFormat(dateStr);
    // At this point, if inferDateFormat is used, you'd need to manually
    // reassemble the date string into a format Date() can reliably parse,
    // or parse components yourself. This is the complexity you're trying to avoid.
  } else if (inputFormat) {
    // If an inputFormat is provided, you still need to parse it according to that format
    // and construct a Date object reliably. This is the hardest part with native Date.
    // The most reliable way for arbitrary formats is to parse manually:
    const inputFormatComponents = inputFormat.toLowerCase().split(/[-\/]/);
    const dateStrComponents = dateStr.split(/[-\/]/);

    let year, month, day;
    inputFormatComponents.forEach((comp, index) => {
      if (comp === 'yyyy') year = dateStrComponents[index];
      else if (comp === 'mm') month = dateStrComponents[index];
      else if (comp === 'dd') day = dateStrComponents[index];
    });
    date = new Date(year, parseInt(month) - 1, day); // Month is 0-indexed
  }

  if (isNaN(date.getTime())) {
      return "ErrorInvalidDateInput"; // Or handle more specific errors
  }

  // Now format the date according to outputFormat
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
  const day = String(date.getDate()).padStart(2, '0');

  let formattedDate = outputFormat.toLowerCase();
  formattedDate = formattedDate.replace(/yyyy/g, year);
  formattedDate = formattedDate.replace(/mm/g, month);
  formattedDate = formattedDate.replace(/dd/g, day);

  return formattedDate;
}
```
