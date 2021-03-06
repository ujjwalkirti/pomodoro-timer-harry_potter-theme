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
import { FaArrowCircleDown, FaWindowClose } from "react-icons/fa";
import { signInWithPopup } from "@firebase/auth";
import boy from "./data/theboywholived.gif";
import map from "./data/map.gif";
import { congratulations_gifs } from "./components/congratulatory_messages";

function App() {
  const [houseSelected, setHouseSelected] = useState(false);
  const [bgColor, setBgColor] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const selectHouse = useContext(houseContext);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        selectHouse.setUser(result.user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const randomNumberGenerator = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    console.log(arr[index]);
    return arr[index];
  };

  useEffect(() => {
    if (selectHouse.countDownCompleted) {
      setShowMessage(true);
    }
  }, [selectHouse.countDownCompleted]);

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
    } else {
      setHouseSelected(false);
      setBgColor("indigo-500");
    }
  }, [selectHouse.house, selectHouse.backGround]);

  return (
    <div
      className={`App bg-${
        bgColor === "" ? "indigo-500" : bgColor
      } h-auto mx-auto text-white`}
    >
      <div className="special_width mx-auto flex flex-col z-10">
        <Navbar />
        {houseSelected ? (
          <div>
            {showMessage && (
              <div className="fixed border bg-gray-700 bg-opacity-90 inset-x-96 inset-y-16 flex justify-center z-40 p-4">
                <img
                  src={randomNumberGenerator(congratulations_gifs)}
                  alt="image"
                  className="w-2/3"
                />
                <FaWindowClose
                  className="absolute right-3 cursor-pointer"
                  onClick={() => {
                    setShowMessage(false);
                    selectHouse.setCountDownCompleted(false);
                  }}
                />
                <p className="font-bold text-3xl fixed bottom-0 text-center p-3 bg-black bg-opacity-90">
                  Congratulations on successfully completeing a session! keep
                  working!
                </p>
              </div>
            )}
            <img
              src={boy}
              className="fixed top-0 left-3 z-0 h-60 w-60 saturate-150 backdrop-blur-lg"
            />
            <img src={map} className="fixed top-0 right-3 h-60 w-60" />
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
