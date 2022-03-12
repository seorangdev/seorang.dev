+++
title = "React Custom Hook: Countdown"
description = "Using React's Effect Hook to build a countdown"
date = 2022-02-11
draft = false
+++

## Use Case

- User can set the duration in second.
- User can set a callback function that receives the current countdown in second on each tick.
- User can change the duration while the countdown is running and will immediately use the latest duration on the next tick.
- User can also change the duration while the countdown was finished, doing so will restart the countdown using the latest duration.

## Code (TypeScript)

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

## Tested On

- React >= 17

## Inspired From

- [Making setInterval Declarative with React Hooks](https://overreacted.io/making-setinterval-declarative-with-react-hooks/) by Overreacted
