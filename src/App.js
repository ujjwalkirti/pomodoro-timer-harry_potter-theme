import { useContext, useEffect, useState } from "react";
import Card from "./components/Card";
import SelectHouse from "./components/SelectHouse";
import "./App.css";
import { houseContext } from "./services/context/houseContext";
import Navbar from "./components/Navbar";
import AddTasks from "./components/AddTasks";
import { auth, provider } from "./services/Firebase/firebase";
import ReactPlayer from "react-player/lazy";
import { houses } from "./data/houses";
import { FaArrowCircleDown } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import boy from "./data/theboywholived.gif";
import map from "./data/map.gif";

function App() {
  const [houseSelected, setHouseSelected] = useState(false);
  const [bgColor, setBgColor] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const selectHouse = useContext(houseContext);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        selectHouse.setUser(result.user);
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

  useEffect(() => {
    if (selectHouse.user === null) {
      auth.onAuthStateChanged((currentUser) => {
        selectHouse.setUser(currentUser);
        // console.log(currentUser);
      });
    }
    if (selectHouse.house !== "") {
      setHouseSelected(true);

      houses.map((house) => {
        if (house.name.toLowerCase() === selectHouse.house) {
          setBgColor(house.primaryColor);
          setVideoURL(house.videoURL);
        }
      });

      console.log(selectHouse.backGround);
    }
  }, [selectHouse.house, selectHouse.backGround]);

  return (
    <div
      className={`App bg-${
        bgColor === "" ? "indigo-500" : bgColor
      } h-auto mx-auto text-white`}
    >
      <img
        src={boy}
        className="fixed top-0 left-3 z-0 h-60 w-60 saturate-150 backdrop-blur-lg"
      />
      <img src={map} className="fixed top-0 right-3 h-60 w-60"/>
      <div className="special_width mx-auto flex flex-col z-10">
        <Navbar />
        {houseSelected ? (
          <div>
            <div className="flex">
              <div className="w-1/2">
                <Card />
              </div>
              <div className="w-1/2">
                <AddTasks />
              </div>
            </div>
            {selectHouse.house !== "" && (
              <div className="mx-auto w-full flex flex-col items-center my-1">
                <p className="text-5xl my-4 font-semibold flex justify-evenly items-center w-full animate-pulse">
                  Want some common room ambience?{" "}
                  <FaArrowCircleDown className="animate-bounce" />
                </p>
                {selectHouse.user === null && (
                  <p
                    className="my-5 border rounded-lg shadow-lg px-3 py-1 cursor-pointer text-xl font-semibold"
                    onClick={handleLogin}
                  >
                    Please log in
                  </p>
                )}
                {selectHouse.user !== null && (
                  <ReactPlayer
                    url={videoURL}
                    height={300}
                    width={500}
                    controls={true}
                  />
                )}
              </div>
            )}
          </div>
        ) : (
          <SelectHouse />
        )}
      </div>
    </div>
  );
}

export default App;
