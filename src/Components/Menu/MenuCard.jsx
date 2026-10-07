import { useState } from "react";
import Button from "../UI/button";
import Modal from "../UI/Modal";
import MenuModal from "./component/MenuModal";
import StatusBadge from "../UI/StatusBadge";
import { usePlateStore } from "../Store/PlateStore";

const STATUS_MESSAGES = {
  unavailable: "Sorry, this item is not available for now.",
  "few-minutes": "Please note: this item will be available in few minutes.",
};

const MenuCard = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [statusMessage, setStatusMessage] = useState("");
  const cart = usePlateStore((state) => state.cart);
  const removeByProductId = usePlateStore((state) => state.removeByProductId);

  const isAdded = cart.some(
    (item) => item?.id === product.id || item?.productId === product.id,
  );

  const handleClick = () => {
    if (isAdded) {
      removeByProductId(product.id);
      return;
    }

    if (product.status === "unavailable") {
      setStatusMessage(STATUS_MESSAGES.unavailable);
      return;
    }

    if (product.status === "few-minutes") {
      setStatusMessage(STATUS_MESSAGES["few-minutes"]);
    }

    setIsOpen(true);
  };

  return (
    <div className="rounded-lg p-4 shadow-xxl bg-white w-full">
      <h2 className="font-semibold text-lg">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-52 object-cover rounded ${
              product.status === "unavailable" ? "opacity-50" : ""
            }`}
          />

          <div className="absolute top-2 left-2">
            <StatusBadge status={product.status} />
          </div>
        </div>

        <div className="flex items-center align-middle mt-4  justify-between">
          <div>
            {product.name}

            
          </div>

          <Button
            onClick={handleClick}
            variant={isAdded ? "delete" : "secondary"}
            className=" px-4 rounded text-white"
          >
            {isAdded ? "Delete" : "Order"}
          </Button>
        </div>
      </h2>

      <Modal
        isOpen={Boolean(statusMessage)}
        onClose={() => setStatusMessage("")}
        title="Heads up"
      >
        <p className="text-gray-600">{statusMessage}</p>
        <Button
          variant="secondary"
          className="mt-4 px-4 py-2 rounded text-white flex items-center"
          onClick={() => setStatusMessage("")}
        >
          Okay
        </Button>
      </Modal>

      <MenuModal isOpen={isOpen} setIsOpen={setIsOpen} product={product} />
    </div>
  );
};

export default MenuCard;
