+++
title = "Back to Basic: Building A Countdown in React Using Hooks"
description = "I really cannot wrap my head at first. But turns out it quite simple!"
date = 2022-02-11
draft = false
+++

I want to build a countdown with this specification:

- User can set the duration in second.
- User can set a callback function that receives the current countdown in second on each tick.
- User can change the duration while the countdown is running and will immediately use the latest duration on the next tick.
- User can also change the duration while the countdown was finished, doing so will restart the countdown using the latest duration.

This is the final custom hook code in TypeScript:

```ts
import { useEffect, useRef } from "react";

function useCountdown(
  durationSeconds: number,
  onTick: (currentSecond: number) => void
) {
  const timeleft = useRef(0);

  useEffect(() => {
    timeleft.current = durationSeconds;

    let intervalId: number;

    function tick() {
      timeleft.current -= 1;
      onTick(timeleft.current);
      if (timeleft.current <= 0) clearInterval(intervalId);
    }

    if (timeleft.current > 0) {
      intervalId = setInterval(tick, 1000);
      return () => clearInterval(intervalId);
    }
  }, [durationSeconds]);
}

export { useCountdown };
```

## Explanation

TODO
