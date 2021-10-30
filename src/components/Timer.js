import React, { useState } from "react";

function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleStart = () => {};
  const handleStop = () => {};
  return (
    <div>
      <div className="flex w-80 justify-between m-10 border border-white p-5 rounded-lg">
        <p>Change hours</p>
        <button
          onClick={() => {
            setHours(hours + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            if (hours > 0) {
              setHours(hours - 1);
            } else {
              alert("Time cannot be negative");
            }
          }}
        >
          -
        </button>
      </div>

      <div className="flex w-80 justify-between m-10 border border-white p-5 rounded-lg">
        <p>Change minutes</p>
        <button
          onClick={() => {
            setMinutes(minutes + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            if (minutes > 0) {
              setMinutes(minutes - 1);
            } else {
              alert("Time cannot be negative");
            }
          }}
        >
          -
        </button>
      </div>

      <div className="flex w-80 justify-between m-10 border border-white p-5 rounded-lg">
        <p>Change seconds</p>
        <button
          onClick={() => {
            setSeconds(seconds + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            if (seconds > 0) {
              setSeconds(seconds - 1);
            } else if (seconds === 0) {
              setSeconds(59);
              setMinutes(minutes - 1);
            } else {
              alert("Time cannot be negative");
            }
          }}
        >
          -
        </button>
      </div>
      <p className="flex w-80 justify-between m-10 border border-white p-5 rounded-lg">
        {hours / 10 === 0 ? "0" : null}
        {hours}:{minutes / 10 === 0 ? "0" : null}
        {minutes}:{seconds / 10 === 0 ? "0" : null}
        {seconds}
      </p>
      <div className="flex w-80 justify-evenly m-10 border border-white p-5 rounded-lg">
        <button onClick={handleStart}>Start</button>{" "}
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
}

export default Timer;
