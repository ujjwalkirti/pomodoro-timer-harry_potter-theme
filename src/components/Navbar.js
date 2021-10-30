import React from "react";
import { BsLightningCharge } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";

function Navbar() {
  return (
    <div className="w-full h-14 border-b border-gray-200 flex items-center justify-between mr-2">
      <p className="flex text-white font-bold text-xl items-center w-60 ml-4">
        <BsLightningCharge className="mr-2" /> WizardingPomo
      </p>
      <div className="flex">
        <p className="mr-3 cursor-pointer bg-white bg-opacity-40 px-2 py-1 rounded-lg flex items-center">
          <IoMdSettings className='mr-1'/> Setting
        </p>
        <p className="mr-2 cursor-pointer bg-white bg-opacity-40 px-2 py-1 rounded-lg flex items-center">
          <HiUserCircle className="mr-1" /> Login
        </p>
      </div>
    </div>
  );
}

export default Navbar;
