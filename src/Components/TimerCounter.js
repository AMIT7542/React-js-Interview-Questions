import React, { useEffect, useState } from "react";

const TimerCounter = () => {
  const [duration, setDuration] = useState(0);
  const [flag, setFlag] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let interval = null;

    if (flag && counter < duration) {
      interval = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    }
    if (!flag) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [flag, counter]);
  const startTimer = () => {
    setFlag(true);
  };
  const endTimer = () => {
    setFlag(false);
  };

  return (
    <div style={{ margin: "20px" }}>
      <div>
        <label>Enter Number:</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <div>
          <button disabled={flag} onClick={startTimer}>
            Start
          </button>
          <button disabled={!flag} onClick={endTimer}>
            Stop
          </button>
        </div>
        <p>Counter Value is:{counter}</p>
      </div>
    </div>
  );
};

export default TimerCounter;
