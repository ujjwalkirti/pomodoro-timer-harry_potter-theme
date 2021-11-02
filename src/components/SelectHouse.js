import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { houseContext } from "../services/context/houseContext";
import gryffindor from "../data/gryffindor.gif";
import hufflepuff from "../data/hufflepuff.gif";
import slytherin from "../data/slytherin.gif";
import ravenclaw from "../data/ravenclaw.gif";

function SelectHouse() {
  const [houseThemes, setHouseThemes] = useState([
    {
      name: "Gryffindor",
      primaryColor: "red-600",
      secondaryColor: "yellow-400",
      videoURL: "https://www.youtube.com/watch?v=vL1YsTTQW5c",
      image: gryffindor,
    },
    {
      name: "Hufflepuff",
      primaryColor: "yellow-500",
      secondaryColor: "gray-800",
      videoURL: "https://www.youtube.com/watch?v=xczn2_hYoUI&t=575s",
      image: hufflepuff,
    },
    {
      name: "Ravenclaw",
      primaryColor: "blue-500",
      secondaryColor: "yellow-900",
      videoURL: "https://www.youtube.com/watch?v=4CEq9LARLv4",
      image: ravenclaw,
    },
    {
      name: "Slytherin",
      primaryColor: "green-600",
      secondaryColor: "gray-500",
      videoURL: "https://www.youtube.com/watch?v=-aadskAxEEw",
      image: slytherin,
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
              className={`bg-gradient-to-br shadow-lg from-${houseTheme.primaryColor} to-${houseTheme.secondaryColor} h-80 py-1 px-1 rounded-lg text-3xl font-semibold m-3 w-2/5  hover:transition-all  hover:scale-125 hover:duration-200  hover:ease-in-out`}
              onClick={() => {
                selectHouse.setHouse(houseTheme.name.toLowerCase());
              }}
            >
              <p className="my-2">{houseTheme.name}</p>
              <img
                src={houseTheme.image}
                className="rounded-full h-60 w-60 mx-auto"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SelectHouse;
