import { FaPlateWheat } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import Modal from "../UI/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePlateStore } from "../Store/PlateStore";
import { usePlateTotal } from "../Store/usePlateTotals";
import Button from "../UI/Button";

const FloatingPlate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = usePlateStore((state) => state.cart);
  const isBikeFEEon = usePlateStore((state) => state.isBikeFEEon);
  const isTakeawayFeeOn = usePlateStore((state) => state.isTakeawayFeeOn);
  const setTakeawayFee = usePlateStore((state) => state.setTakeawayFee);
  const setBikeFee = usePlateStore((state) => state.setBikeFee);
  const removeFromCart = usePlateStore((state) => state.removeFromCart);

  const navigate = useNavigate();

  const {
    swallowCount,
    takeawayFee,
    bikeFee,
    Service_charge,
    total,
    TAKEAWAY_FEE_PER_SWALLOW,
  } = usePlateTotal();

  return (
    <div>
      <div
        className="fixed bottom-10 xl:bottom-30 right-5 bg-amber-300 rounded-full p-4 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <FaPlateWheat className="text-4xl" />
        {cart.length > 0 && (
          <p className="bg-red-600 w-6 h-6 flex justify-center border-2 border-white absolute top-4 right-2 rounded-full items-center">
            {cart.length}
          </p>
        )}
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={
          <div className="flex gap-3 items-center ">
            <FaPlateWheat className="text-2xl" />
            <h1>My Plate</h1>
          </div>
        }
      >
        <div className="flex flex-col max-h-[65vh]">
          {cart.length === 0 ? (
            <p className="text-gray-400">Your plate is empty.</p>
          ) : (
            <>
              <div className="flex-1 min-h-0 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div
                    key={item.cartItemId}
                    className="flex justify-between items-start gap-3 py-2"
                  >
                    <div className="flex gap-3 items-start min-w-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 shrink-0 object-cover rounded"
                      />
                      <div className="min-w-0">
                        <div className="flex gap-2 items-start">
                          <p className="wrap-break-word">{item.name}</p>
                          {item.quantity && (
                            <p className="text-gray-400 text-sm shrink-0">
                              x{item.quantity}
                            </p>
                          )}
                        </div>
                        {item.extras?.protein && (
                          <p className="text-xs text-gray-500">
                            + {item.extras.protein.quantity} ×{" "}
                            {item.extras.protein.name} (N
                            {item.extras.protein.total})
                          </p>
                        )}
                        {item.extras?.swallow && (
                          <p className="text-xs text-gray-500">
                            + Extra {item.extras.swallow.name} (N
                            {item.extras.swallow.total})
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <p>N{item.amount}</p>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.cartItemId)}
                        aria-label={`Remove ${item.name}`}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="shrink-0">
                <div className="flex justify-between items-center py-2 mt-2 border-t">
                  <label htmlFor="bike-fee-toggle" className="text-sm">
                    Bike fee
                  </label>
                  <input
                    id="bike-fee-toggle"
                    type="checkbox"
                    checked={isBikeFEEon}
                    onChange={(e) => setBikeFee(e.target.checked)}
                  />
                </div>

                <div className="flex justify-between items-center py-2 border-t">
                  <label htmlFor="takeaway-fee-toggle" className="text-sm">
                    Take-away fee
                  </label>
                  <input
                    id="takeaway-fee-toggle"
                    type="checkbox"
                    checked={isTakeawayFeeOn}
                    onChange={(e) => setTakeawayFee(e.target.checked)}
                  />
                </div>

                {isTakeawayFeeOn && takeawayFee > 0 && (
                  <div className="flex justify-between items-center py-1 text-sm text-gray-500">
                    <p>
                      Take-away fee ({swallowCount} × N{TAKEAWAY_FEE_PER_SWALLOW})
                    </p>
                    <p>N{takeawayFee}</p>
                  </div>
                )}

                {isBikeFEEon && (
                  <div>
                    <div className="flex justify-between items-center py-1 text-sm text-gray-500">
                      <p>Bike fee</p>
                      <p>N{bikeFee}</p>
                    </div>
                    <p className="text-orange-400 text-xs">
                      more than one plate to the same location? only click bike
                      fee once
                    </p>
                  </div>
                )}

                <div className="flex justify-between items-center pt-2 mt-1 border-t font-semibold">
                  <p>Service-Charge</p>
                  <p>N{Service_charge}</p>
                </div>

                <div className="flex justify-between items-center pt-2 mt-1 border-t font-semibold">
                  <p>Total</p>
                  <p>N{total}</p>
                </div>

                <div className="mt-3">
                  <Button
                    variant="secondary"
                    className="w-full h-10"
                    onClick={() => navigate("/address")}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default FloatingPlate;