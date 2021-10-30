import React, { useState } from "react";
import Timer from "./Timer";

const typeOfBreaks = ["short", "long"];

function Card() {
  const [breakType, setBreakType] = useState("");
  return (
    <div className="">
      <div className="flex w-60 mx-auto justify-evenly mt-3">
        <button>Pomodoro</button>
        <button
          onClick={() => {
            setBreakType(typeOfBreaks[0]);
          }}
        >
          Short Break
        </button>
        <button
          onClick={() => {
            setBreakType(typeOfBreaks[1]);
          }}
        >
          Long Break
        </button>
      </div>
      {breakType !== "" ? (
        <div>
          <p>Break Over? </p>
          <button
            className="border border-white p-2 rounded-lg m-2"
            onClick={() => {
              setBreakType("");
            }}
          >
            Go back
          </button>
        </div>
      ) : null}
      <Timer breakType={breakType} />
    </div>
  );
}

export default Card;
