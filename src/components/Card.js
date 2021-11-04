import React, { useContext, useEffect, useState } from "react";
import { houseContext } from "../services/context/houseContext";
import Timer from "./Timer";



function Card() {
  

  const houseColors = useContext(houseContext);

  return (
    <div className=" bg-white bg-opacity-30 p-5 m-5 rounded-lg">
      <div className={`flex w-full mx-auto justify-evenly mt-3`}></div>
      <Timer />
    </div>
  );
}

export default Card;
