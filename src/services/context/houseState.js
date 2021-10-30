import { useState } from "react";
import { houseContext } from "./houseContext";

const HouseState = (props) => {
  const [house, setHouse] = useState("");
  const [backGround, setBackGround] = useState("");
  return (
    <houseContext.Provider
      value={{ house, setHouse, backGround, setBackGround }}
    >
      {props.children}
    </houseContext.Provider>
  );
};

export default HouseState;
