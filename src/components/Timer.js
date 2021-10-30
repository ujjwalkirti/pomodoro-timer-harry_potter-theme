import React, { useEffect, useState } from "react";

function Timer(props) {
  const [seconds, setSeconds] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let intervalCounter = null;
    if (timerOn) {
      if (seconds > 0) {
        intervalCounter = setInterval(() => {
          setSeconds((prevTime) => prevTime - 1);
          console.log(seconds);
        }, 1000);
      }
    } else {
      clearInterval(intervalCounter);
    }
    return () => clearInterval(intervalCounter);
  }, [timerOn]);

  return (
    <div>
      <div className="flex w-80 justify-between m-10 border border-white p-5 rounded-lg">
        <p>Change hours</p>
        <button
          onClick={() => {
            setSeconds(seconds + 3600);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setSeconds(seconds - 3600);
          }}
        >
          -
        </button>
      </div>

      <div className="flex w-80 justify-between m-10 border border-white p-5 rounded-lg">
        <p>Change minutes</p>
        <button
          onClick={() => {
            setSeconds(seconds + 60);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setSeconds(seconds - 60);
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
            } else {
              alert("Time cannot be negative");
            }
          }}
        >
          -
        </button>
      </div>
      <p className="flex w-80 justify-between m-10 border border-white p-5 rounded-lg">
        {Math.floor(seconds / 3600 / 10) === 0 ? 0 : null}
        {Math.floor(seconds / 3600)}:
        {Math.floor(seconds / 60 / 10) === 0 ? 0 : null}
        {Math.floor(seconds / 60)}:{Math.floor(seconds / 10) === 0 ? 0 : null}
        {seconds % 60}
      </p>
      <div className="flex w-80 justify-evenly m-10 border border-white p-5 rounded-lg">
        <button
          onClick={() => {
            setTimerOn(true);
          }}
        >
          Start
        </button>{" "}
        <button
          onClick={() => {
            setTimerOn(false);
          }}
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default Timer;
