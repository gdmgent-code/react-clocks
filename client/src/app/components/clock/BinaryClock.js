import React, { useEffect, useState } from 'react';

import LEDStrip from './LEDStrip';

import './BinaryClock.css';

const BinaryClock = (props) => {
  const [time, setTime] = useState(null);
  const [partsOfTime, setPartsOfTime] = useState({
   hoursDigit1: 0,
   hoursDigit2: 0,
   minutesDigit1: 0,
   minutesDigit2: 0,
   secondsDigit1: 0,
   secondsDigit2: 0
  });

  useEffect(() => {
    async function getTime() {
      setTime(new Date().getTime()); 
    }

    if (!time) {
      getTime();
    } else {
      const readableTimeString = toReadableTimeString(time);
      const timeParts = readableTimeString.split(':');

      setPartsOfTime({
        hoursDigit1: timeParts[0][0],
        hoursDigit2: timeParts[0][1],
        minutesDigit1: timeParts[1][0],
        minutesDigit2: timeParts[1][1],
        secondsDigit1: timeParts[2][0],
        secondsDigit2: timeParts[2][1]
      });
    }

    const timerId = setInterval( () => getTime(), 500);

    return () => clearInterval(timerId);
  }, [time]);

  const toReadableTimeString = (t) => {
    const date = new Date(t);
    const h = toBits(date.getHours().toString(), 2);
    const m = toBits(date.getMinutes().toString(), 2);
    const s = toBits(date.getSeconds().toString(), 2);

    return `${h}:${m}:${s}`;
  };

  const toBits = (input, n) => {
    while (input.length < n) {
      input = `0${input}`;
    }
    return input;
  };

  return (
    <div className="binary-clock">
      <LEDStrip value={partsOfTime.hoursDigit1} amount="2" />
      <LEDStrip value={partsOfTime.hoursDigit2} amount="4" />
      <LEDStrip value={partsOfTime.minutesDigit1} amount="3" />
      <LEDStrip value={partsOfTime.minutesDigit2} amount="4" />
      <LEDStrip value={partsOfTime.secondsDigit1} amount="3" />
      <LEDStrip value={partsOfTime.secondsDigit2} amount="4" />
    </div>
  );
}

export default BinaryClock;