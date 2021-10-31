import { useContext, useEffect, useState } from "react";
import Card from "./components/Card";
import SelectHouse from "./components/SelectHouse";
import "./App.css";
import { houseContext } from "./services/context/houseContext";
import Navbar from "./components/Navbar";
import AddTasks from "./components/AddTasks";

function App() {
  const [houseSelected, setHouseSelected] = useState(false);
  const [bgColor, setBgColor] = useState("");
  const selectHouse = useContext(houseContext);

  useEffect(() => {
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
            <AddTasks/>
          </div>
        ) : (
          <SelectHouse />
        )}
      </div>
    </div>
  );
}

export default App;
