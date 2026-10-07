import FloatingPlate from "../../Components/FloatingPlate/FloatingPlate";
import { NavBar } from "../../Navigation/NavBar";
import Banner from "./Components/Banner";
import Category from "./Components/Category";
import { useState } from "react";

const DashBoard = () => {
  const [plateItems, setPlateItems] = useState([]);

  return (
    <div>
      <NavBar />

      <Banner />                         

      <Category plateItems={plateItems} setPlateItems={setPlateItems} />

      <FloatingPlate  />
    </div>
  );
};

export default DashBoard;
