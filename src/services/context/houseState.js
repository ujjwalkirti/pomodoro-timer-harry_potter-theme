import { useState } from "react";
import { houseContext } from "./houseContext";

const HouseState = (props) => {
  const [house, setHouse] = useState("");
  const [backGround, setBackGround] = useState("");
  const [countDownCompleted, setCountDownCompleted] = useState(false);
  const [user, setUser] = useState(null);
  return (
    <houseContext.Provider
      value={{
        house,
        setHouse,
        backGround,
        setBackGround,
        countDownCompleted,
        setCountDownCompleted,
        user,
        setUser,
      }}
    >
      {props.children}
    </houseContext.Provider>
  );
};

export default HouseState;
