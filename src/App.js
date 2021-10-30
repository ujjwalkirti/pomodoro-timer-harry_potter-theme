import { useContext, useEffect, useState } from "react";
import Card from "./components/Card";
import SelectHouse from "./components/SelectHouse";
import "./App.css";
import { houseContext } from "./services/context/houseContext";

function App() {
  const [houseSelected, setHouseSelected] = useState(false);

  const selectHouse = useContext(houseContext);
  useEffect(() => {
    if (selectHouse.house !== "") {
      setHouseSelected(true);
    }
  }, [selectHouse.house]);

  return (
    <div className="App bg-gray-700 h-screen border border-white special_width mx-auto text-white p-2">
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
