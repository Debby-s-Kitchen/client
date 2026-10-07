
import { useAddFood } from "../Store/UseAddFood";
import MenuCard from "./MenuCard";

const MenuGrid = () => {
const MenuData = useAddFood((state) => state.MenuData);


  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 ">
      {MenuData.map((product) => (
        <MenuCard
          key={product.id}
          product={product}
        //   plateItems={plateItems}
        //  setPlateItems={setPlateItems}
        />
      ))}
    </div>
  );
};

export default MenuGrid;