import { useState } from "react";
import { houseContext } from "./houseContext";

const HouseState = (props) => {
  const [house, setHouse] = useState("");
  const [backGround, setBackGround] = useState("");
  const [breakType, setBreakType] = useState("");
  return (
    <houseContext.Provider
      value={{
        house,
        setHouse,
        backGround,
        setBackGround,
        breakType,
        setBreakType,
      }}
    >
      {props.children}
    </houseContext.Provider>
  );
};

export default HouseState;
