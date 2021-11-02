import { GoogleAuthProvider, signInWithPopup, signOut } from "@firebase/auth";
import React, { useContext } from "react";
import { BsLightningCharge } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";
import { GoSignOut } from "react-icons/go";
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
      className={`w-full h-14 border-white border-opacity-80 border-b flex items-center justify-between mr-2`}
    >
      <p className="flex text-white font-bold text-xl items-center w-60 ml-4">
        <BsLightningCharge className="mr-2" /> WizardingPomo
      </p>
      <div className="flex">
        {context.user === null ? (
          <p
            className="mr-2 cursor-pointer bg-white bg-opacity-40 px-2 py-1 rounded-lg flex items-center"
            onClick={handleLogin}
          >
            <HiUserCircle className="mr-1" /> Login
          </p>
        ) : (
          <div className="flex">
            <img
              className="h-10 w-10 rounded-full mx-4 cursor-pointer"
              src={context.user.photoURL}
            />
            <p
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    // Sign-out successful.
                    context.setUser(null);
                  })
                  .catch((error) => {
                    // An error happened.
                    alert(error);
                  });
              }}
              className="mr-2 cursor-pointer bg-white bg-opacity-40 px-2 py-1 rounded-lg flex items-center"
            >
              <GoSignOut />
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
