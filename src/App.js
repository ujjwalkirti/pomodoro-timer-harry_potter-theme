import { useContext, useEffect, useState } from "react";
import Card from "./components/Card";
import SelectHouse from "./components/SelectHouse";
import "./App.css";
import { houseContext } from "./services/context/houseContext";
import Navbar from "./components/Navbar";
import AddTasks from "./components/AddTasks";
import { auth } from "./services/Firebase/firebase";
import ReactPlayer from "react-player/lazy";
import { houses } from "./data/houses";
import { FaArrowCircleDown } from "react-icons/fa";

function App() {
  const [houseSelected, setHouseSelected] = useState(false);
  const [bgColor, setBgColor] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const selectHouse = useContext(houseContext);

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
      <div className="special_width mx-auto flex flex-col">
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
              <div className="mx-auto w-full flex flex-col items-center mt-1">
                <p className="text-5xl my-4 font-semibold flex justify-evenly items-center w-full animate-pulse">
                  Want some common room ambience?{" "}
                  <FaArrowCircleDown className="animate-bounce" />
                </p>
                <ReactPlayer
                  url={videoURL}
                  height={300}
                  width={500}
                  controls={true}
                />
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
