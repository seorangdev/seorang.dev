+++
title = "Standard to Military Time Conversion"
description = "A function to convert standard time (12 hour) to military time (24 hour)"
date = 2022-03-12
draft = false
+++

## Input

A string of time in 12 hour. Formatted as {hour}:{minute} {AM/PM}.

## Ouput

A successful conversion will return a string of time in 24 hour.
Otherwise, boolean `false` will be returned.

## Improvised Code

```php
<?php

function militaryTime(string $standardTime = '12:00 AM'): bool|string
{
    # Parse raw input as array
    $components = explode(" ", $standardTime);

    # Validate the input make sure
    # two components are present (time and indicator)
    if (count($components) != 2) {
        return false;
    }

    # Make each component uppercased to maintain consistency
    [$time, $indicator] = array_map('strtoupper', $components);

    # Parse time to hour and minute then convert to integer
    [$hour, $minute] = array_map('intval', explode(':', $time));

    # Validate input components
    $isIndicatorInvalid = (in_array($indicator, ['AM', 'PM']) === false);
    $isHourInvalid = ($hour < 1 || $hour > 12);
    $isMinuteInvalid = ($minute < 0 || $minute > 59);

    if ($isIndicatorInvalid || $isHourInvalid || $isMinuteInvalid) {
        return false;
    }

    # Perform conversion when it's 12 AM or 1 PM to 11 PM.
    if ($indicator === 'AM') {
        if ($hour === 12) $hour = 00;
    } else {
        if ($hour >= 1 && $hour <= 11) $hour += 12;
    }

    return sprintf('%0d:%d', $hour, $minute);
}
```

## Minimal Code

```php
<?php

$hour = 12;
$minute = 30;
$indicator = 'AM';

if ($indicator === 'AM') {
    if ($hour === 12) $hour = 00;
} else {
    if ($hour >= 1 && $hour <= 11) $hour += 12;
}

$result = sprintf('%0d:%d', $hour, $minute);
```

## Tested On

- PHP >= 8.0.0 (as is)
- PHP <= 7.4 (remove or change the return type to `mixed`)
