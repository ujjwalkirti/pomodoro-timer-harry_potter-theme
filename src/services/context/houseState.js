import { useState } from "react";
import { houseContext } from "./houseContext";

const HouseState = (props) => {
  const [house, setHouse] = useState("");
  const [backGround, setBackGround] = useState("");
  // const [breakType, setBreakType] = useState("");
  const [user, setUser] = useState(null);
  return (
    <houseContext.Provider
      value={{
        house,
        setHouse,
        backGround,
        setBackGround,
        user,
        setUser,
      }}
    >
      {props.children}
    </houseContext.Provider>
  );
};

export default HouseState;
