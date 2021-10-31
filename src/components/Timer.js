import React, { useEffect, useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { GiPauseButton } from "react-icons/gi";
import { BsPlusCircleFill } from "react-icons/bs";
import { useContext } from "react/cjs/react.development";
import { houseContext } from "../services/context/houseContext";

function getSeconds(props) {
  if (props === "short") {
    return 5 * 60;
  } else if (props === "long") {
    return 15 * 60;
  } else {
    return 25 * 60;
  }
}

function Timer() {
  const universalState = useContext(houseContext);

  const [seconds, setSeconds] = useState(
    getSeconds(universalState.breakType)
  );
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
      <div className="flex justify-between m-1 border border-white p-5 rounded-lg w-full">
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
            setSeconds(seconds - 3600);
          }}
        >
          -
        </button>
      </div>

      <div className="flex w-full justify-between m-1 border border-white p-5 rounded-lg ">
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
            setSeconds(seconds - 60);
          }}
        >
          -
        </button>
      </div>

      <div className="flex w-full justify-between m-1 border border-white p-5 rounded-lg">
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
          -
        </button>
      </div>
    </div>
  );
}

export default Timer;
