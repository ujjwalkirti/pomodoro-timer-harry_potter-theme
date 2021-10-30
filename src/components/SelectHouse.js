import React, { useContext } from "react";
import { houseContext } from "../services/context/houseContext";

function SelectHouse() {
  const selectHouse = useContext(houseContext);
  return (
    <div>
      <p>Select your house:</p>
      <div className="flex w-2/3 mx-auto justify-between mt-4">
        <button
          onClick={() => {
            selectHouse.setHouse("gryffindor");
            console.log(selectHouse.house);
          }}
        >
          Gryffindor
        </button>
        <button
          onClick={() => {
            selectHouse.setHouse("hufflepuff");
            console.log(selectHouse.house);
          }}
        >
          Hufflepuff
        </button>
        <button
          onClick={() => {
            selectHouse.setHouse("ravenclaw");
            console.log(selectHouse.house);
          }}
        >
          Ravenclaw
        </button>
        <button
          onClick={() => {
            selectHouse.setHouse("slytherin");
            console.log(selectHouse.house);
          }}
        >
          Slytherin
        </button>
      </div>
      <p>Your current selected house is: {selectHouse.house}</p>
    </div>
  );
}

export default SelectHouse;
