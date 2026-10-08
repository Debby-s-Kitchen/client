
import MenuCard from "./MenuCard";

const MenuGrid = ({MenuData}) => {



  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 ">
      {MenuData.map((product) => (
        <MenuCard
          key={product.id}
          product={product}
        
        />
      ))}
    </div>
  );
};

export default MenuGrid;