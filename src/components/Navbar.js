import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import React, { useContext } from "react";
import { BsLightningCharge } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { houseContext } from "../services/context/houseContext";
import { auth, provider } from "../services/Firebase/firebase";

function Navbar() {
  const context = useContext(houseContext);
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        context.setUser(result.user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div
      className={`w-full h-14 border-${context.backGround} border-b flex items-center justify-between mr-2`}
    >
      <p className="flex text-white font-bold text-xl items-center w-60 ml-4">
        <BsLightningCharge className="mr-2" /> WizardingPomo
      </p>
      <div className="flex">
        <p className="mr-3 cursor-pointer bg-white bg-opacity-40 px-2 py-1 rounded-lg flex items-center">
          <IoMdSettings className="mr-1" /> Setting
        </p>
        {context.user === null ? (
          <p
            className="mr-2 cursor-pointer bg-white bg-opacity-40 px-2 py-1 rounded-lg flex items-center"
            onClick={handleLogin}
          >
            <HiUserCircle className="mr-1" /> Login
          </p>
        ) : (
          <p className="mr-2 cursor-pointer bg-white bg-opacity-40 px-2 py-1 rounded-lg flex items-center">
            {context.user.email}
          </p>
        )}
      </div>
    </div>
  );
}

export default Navbar;
