import React, { useContext, useEffect, useState } from "react";
import { houseContext } from "../services/context/houseContext";
import Timer from "./Timer";

const typeOfBreaks = ["short", "long"];

function Card() {
  const [breakType, setBreakType] = useState("");

  const houseColors = useContext(houseContext);
  useEffect(() => {
    houseColors.setBreakType(breakType);
  }, [breakType]);

  return (
    <div className=" bg-white bg-opacity-30 p-5 m-5 rounded-lg">
      <div
        className={`${() =>
          breakType === ""
            ? "bg-white bg-opacity-40 text-semibold"
            : null} flex w-full mx-auto justify-evenly mt-3`}
      >
        <button
          className={`${
            breakType === "" ? "bg-${houseColors.backGround}" : null
          } bg-opacity-30`}
          onClick={() => {
            setBreakType("");
          }}
        >
          Pomodoro
        </button>
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
      <Timer />
    </div>
  );
}

export default Card;
