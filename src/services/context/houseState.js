import { useState } from "react";
import { houseContext } from "./houseContext";

const HouseState = (props) => {
  const houseThemes = [
    { name: "gryffindor", primaryColor: "red", secondaryColor: "yellow" },
    { name: "hufflepuff", primaryColor: "yellow", secondaryColor: "black" },
    { name: "ravenclaw", primaryColor: "blue", secondaryColor: "brown" },
    { name: "slytherin", primaryColor: "green", secondaryColor: "gray" },
  ];
  const [house, setHouse] = useState("");
  return (
    <houseContext.Provider value={{ house, setHouse, houseThemes }}>
      {props.children}
    </houseContext.Provider>
  );
};

export default HouseState;
