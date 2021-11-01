import { useContext, useEffect, useState } from "react";
import Card from "./components/Card";
import SelectHouse from "./components/SelectHouse";
import "./App.css";
import { houseContext } from "./services/context/houseContext";
import Navbar from "./components/Navbar";
import AddTasks from "./components/AddTasks";
import { auth } from "./services/Firebase/firebase";

function App() {
  const [houseSelected, setHouseSelected] = useState(false);
  const [bgColor, setBgColor] = useState("");
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
      setBgColor(selectHouse.backGround);
      console.log(selectHouse.backGround);
    }
  }, [selectHouse.house, selectHouse.backGround]);

  return (
    <div
      className={`App bg-${
        bgColor === "" ? "indigo-500" : bgColor
      } h-auto mx-auto text-white`}
    >
      <div className="special_width mx-auto">
        <Navbar />
        {houseSelected ? (
          <div>
            <Card />
            <AddTasks />
          </div>
        ) : (
          <SelectHouse />
        )}
      </div>
    </div>
  );
}

export default App;
