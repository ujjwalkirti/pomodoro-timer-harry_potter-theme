import { useContext, useEffect, useState } from "react";
import Card from "./components/Card";
import SelectHouse from "./components/SelectHouse";
import "./App.css";
import { houseContext } from "./services/context/houseContext";
import Navbar from "./components/Navbar";

function App() {
  const [houseSelected, setHouseSelected] = useState(false);
  const [bgColor, setBgColor] = useState("");
  const selectHouse = useContext(houseContext);

  useEffect(() => {
    if (selectHouse.house !== "") {
      setHouseSelected(true);
      setBgColor(selectHouse.backGround);
    }
  }, [selectHouse.house]);

  return (
    <div
      className={`App bg-${
        bgColor === "" ? "indigo-500" : bgColor
      } h-auto special_width mx-auto text-white`}
    >
      <Navbar />
      {houseSelected ? (
        <div>
          <Card />
        </div>
      ) : (
        <SelectHouse />
      )}
    </div>
  );
}

export default App;
