import React, { useEffect, useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { GiPauseButton } from "react-icons/gi";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";

function Timer() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let intervalCounter = null;
    if (timerOn) {
      if (seconds > 0) {
        intervalCounter = setInterval(() => {
          if (seconds > 0) {
            setSeconds((prevTime) => prevTime - 1);
          } else {
            setTimerOn(false);
          }
          console.log(seconds);
        }, 1000);
      }
    } else if (seconds < 0) {
      clearInterval(intervalCounter);
    } else {
      clearInterval(intervalCounter);
    }
    return () => clearInterval(intervalCounter);
  }, [timerOn]);
  return (
    <div className="flex flex-col">
      <p className="font-bold text-8xl flex w-full justify-center m-1 p-5 rounded-lg text-center items-center">
        {Math.floor(seconds / 3600 / 10) === 0 ? 0 : null}
        {Math.floor(seconds / 3600)}:{seconds / 60 / 10 < 1 ? 0 : null}
        {Math.floor((seconds - Math.floor(seconds / 3600) * 3600) / 60)}:
        {Math.floor((seconds % 60) / 10) < 1 ? 0 : null}
        {seconds % 60}
      </p>
      <div className="flex w-full justify-evenly m-1 p-5 rounded-lg">
        {!timerOn && (
          <button
            className="text-5xl"
            onClick={() => {
              setTimerOn(true);
            }}
          >
            <BsPlayCircle />
          </button>
        )}
        {timerOn && (
          <button
            className="text-5xl"
            onClick={() => {
              setTimerOn(false);
            }}
          >
            <GiPauseButton />
          </button>
        )}
      </div>
      <div className="flex justify-between m-1 border border-white  px-5 py-3 rounded-lg w-full">
        <p className="w-1/3">Change hours</p>
        <button
          onClick={() => {
            setSeconds(seconds + 3600);
          }}
        >
          <BsPlusCircleFill />
        </button>
        <button
          onClick={() => {
            if (seconds - 3600 < 0) {
              alert("Time cannot be negative");
            } else {
              setSeconds(seconds - 3600);
            }
          }}
        >
          <AiFillMinusCircle />
        </button>
      </div>

      <div className="flex w-full justify-between m-1 border border-white  px-5 py-3 rounded-lg ">
        <p className="w-1/3">Change minutes</p>
        <button
          onClick={() => {
            setSeconds(seconds + 60);
          }}
        >
          <BsPlusCircleFill />
        </button>
        <button
          onClick={() => {
            if (seconds - 60 >= 0) {
              setSeconds(seconds - 60);
            } else {
              alert("Time cannot be negative");
            }
          }}
        >
          <AiFillMinusCircle />
        </button>
      </div>

      <div className="flex w-full justify-between m-1 border border-white px-5 py-3 rounded-lg">
        <p className="w-1/3">Change seconds</p>
        <button
          onClick={() => {
            setSeconds(seconds + 1);
          }}
        >
          <BsPlusCircleFill />
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
          <AiFillMinusCircle />
        </button>
      </div>
    </div>
  );
}

export default Timer;
