import React, { useEffect, useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import {  GiPauseButton } from "react-icons/gi";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";

import { useContext } from "react/cjs/react.development";
import { houseContext } from "../services/context/houseContext";

function Timer() {
  const [seconds, setSeconds] = useState(3);
  const [minutes, setMinutes] = useState(Math.floor(seconds / 60));
  const [hours, setHours] = useState(Math.floor(minutes / 60));
  const [timerOn, setTimerOn] = useState(false);

  const context = useContext(houseContext);

  useEffect(() => {
    setMinutes(Math.floor(seconds / 60));
    setHours(Math.floor(minutes / 60));
    if (seconds === 0) {
      setTimerOn(false);
      context.setCountDownCompleted(true);
    }
  }, [seconds]);

  useEffect(() => {
    let intervalCounter = null;
    if (timerOn) {
      if (seconds > 0) {
        intervalCounter = setInterval(() => {
          setSeconds((prevTime) => {
            if (prevTime > 0) {
              return prevTime - 1;
            } else {
              clearInterval(intervalCounter);
              return "Time for a break";
            }
          });
        }, 1000);
      } else {
        clearInterval(intervalCounter);
      }
      return () => clearInterval(intervalCounter);
    }
  }, [timerOn]);
  return (
    <div className="flex flex-col">
      {seconds >= 0 ? (
        <p className="font-bold text-8xl flex w-full justify-center m-1 p-5 rounded-lg text-center items-center">
          {hours / 10 < 1 ? 0 : null}
          {hours}:{(minutes % 60) / 10 < 1 ? 0 : null}
          {minutes % 60}:{(seconds % 60) / 10 < 1 ? 0 : null}
          {seconds % 60}
        </p>
      ) : (
        <div className="flex flex-col">
          <p className="font-bold text-4xl flex w-full justify-center m-1 p-5 rounded-lg text-center items-center">
            {seconds}
          </p>
          <button
            onClick={() => {
              setSeconds(25 * 60);
            }}
            className="shadow-lg px-3 py-1 border w-40 mx-auto"
          >
            Reset timer
          </button>
        </div>
      )}
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
