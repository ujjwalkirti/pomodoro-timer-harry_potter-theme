import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { houseContext } from "../services/context/houseContext";

function SelectHouse() {
  const [houseThemes, setHouseThemes] = useState([
    {
      name: "Gryffindor",
      primaryColor: "red-600",
      secondaryColor: "yellow-400",
    },
    {
      name: "Hufflepuff",
      primaryColor: "yellow-500",
      secondaryColor: "gray-800",
    },
    {
      name: "Ravenclaw",
      primaryColor: "blue-500",
      secondaryColor: "yellow-900",
    },
    {
      name: "Slytherin",
      primaryColor: "green-600",
      secondaryColor: "gray-500",
    },
  ]);
  const selectHouse = useContext(houseContext);
  useEffect(() => {
    if (selectHouse.house !== "") {
      houseThemes.map((house) => {
        if (house.name.toLowerCase() === selectHouse.house) {
          selectHouse.setBackGround(house.primaryColor);
          console.log(house.name.toLowerCase());
        }
      });
    }
  }, [selectHouse.house]);
  return (
    <div>
      <p className="text-center text-4xl mt-3">Select your house:</p>
      <div className="w-11/12 mx-auto mt-4">
        {houseThemes.map((houseTheme) => {
          return (
            <button
              className={`bg-gradient-to-br shadow-lg from-${houseTheme.primaryColor} to-${houseTheme.secondaryColor} h-80 py-10 px-1 rounded-lg text-3xl font-semibold m-3 w-2/5`}
              onClick={() => {
                selectHouse.setHouse(houseTheme.name.toLowerCase());
              }}
            >
              {houseTheme.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SelectHouse;
