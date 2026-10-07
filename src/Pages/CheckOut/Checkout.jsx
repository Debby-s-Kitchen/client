import { useNavigate } from "react-router-dom";
import Button from "../../Components/UI/Button";
import { useDelivery } from "../../Components/Store/DeliveryDetail";
import { usePlateStore } from "../../Components/Store/PlateStore";
import { usePlateTotal } from "../../Components/Store/usePlateTotals";
import Modal from "../../Components/UI/Modal";
import { useState } from "react";

const Checkout = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const phone = useDelivery((state) => state.phone);
  const address = useDelivery((state) => state.address);
  const info = useDelivery((state) => state.info);
  const cart = usePlateStore((state) => state.cart);
  const { takeawayFee, bikeFee, total, Service_charge } = usePlateTotal();

  const navigate = useNavigate();
  const baseAmount = selectedItem
    ? Number(selectedItem.amount) - (selectedItem.extras?.total || 0)
    : 0;

  return (
    <div className="px-4 sm:px-8 lg:px-20 py-8 sm:py-10 max-w-6xl  mx-auto">
      <h1 className="font-bold text-center text-2xl sm:text-4xl">Checkout</h1>
      <div className="flex flex-col lg:flex-row gap-8 mt-8 sm:mt-10">
        <section className="w-full lg:w-1/2 bg-white border border-gray-200 rounded-xl shadow-sm p-5 sm:p-6">
          <h2 className="text-lg font-semibold mb-4">Delivery Details</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Phone number</p>
              <p className="w-full min-h-12 flex items-center px-3 border border-gray-300 rounded-lg bg-gray-50">
                {phone}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Address</p>
              <p className="w-full min-h-12 flex items-center px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 wrap-break-word">
                {address}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Additional info</p>
              <p className="w-full min-h-28 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 wrap-break-word">
                {info}
              </p>
            </div>
          </div>
        </section>
        <section className="w-full lg:w-1/2 bg-white border border-gray-200  rounded-xl shadow-sm p-5 sm:p-6 h-fit ">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500 py-6 text-center">
              Your cart is empty.
            </p>
          ) : (
            <div className="divide-y h-70 overflow-y-scroll divide-gray-100">
              {cart.map((item) => (
                <div
                  key={item.cartItemId}
                  className="flex justify-between items-start gap-3 py-3 cursor-pointer hover:bg-gray-600/25 rounded-sm "
                  onClick={() => setSelectedItem(item)}
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
                          {item.extras.protein.name} (₦
                          {item.extras.protein.total.toLocaleString()})
                        </p>
                      )}
                      {item.extras?.swallow && (
                        <p className="text-xs text-gray-500">
                          + Extra {item.extras.swallow.name} (₦
                          {item.extras.swallow.total.toLocaleString()})
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="font-medium shrink-0">
                    ₦{Number(item.amount).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-between items-center border-t border-gray-200 mt-4 pt-4 text-lg font-semibold">
            <p>TakeAway-Fee</p>
            <p>₦{takeawayFee.toLocaleString()}</p>
          </div>
          <div className="flex justify-between items-center border-t border-gray-200 mt-4 pt-4 text-lg font-semibold">
            <p>Bike-Fee</p>
            <p>₦{bikeFee.toLocaleString()}</p>
          </div>
          <div className="flex justify-between items-center border-t border-gray-200 mt-4 pt-4 text-lg font-semibold">
            <p>Service-Charge</p>
            <p>₦{Service_charge.toLocaleString()}</p>
          </div>
          <div className="flex justify-between items-center border-t border-gray-200 mt-4 pt-4 text-lg font-semibold">
            <p>Total</p>
            <p>₦{total.toLocaleString()}</p>
          </div>
          <Button
            variant="secondary"
            className="w-full h-11 mt-6"
            onClick={() => navigate("/payment")}
            disabled={cart.length === 0}
          >
            Make Payment
          </Button>
        </section>
      </div>
      <Modal
        isOpen={Boolean(selectedItem)}
        onClose={() => setSelectedItem(null)}
        title="Order Details"
      >
        {selectedItem && (
          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-16 h-16 shrink-0 object-cover rounded"
              />
              <p className="wrap-break-word font-medium">{selectedItem.name}</p>
            </div>

            <div className="border-t pt-3 space-y-1 text-sm text-gray-600">
              {/* The plate itself (combo price, or the amount for rice etc.) */}
              <p className="flex justify-between">
                <span>
                  {selectedItem.quantity > 1
                    ? `${selectedItem.quantity} × plate`
                    : "Plate"}
                </span>
                <span>₦{baseAmount.toLocaleString()}</span>
              </p>

              {selectedItem.mixSoup && (
                <p className="flex justify-between">
                  <span>Mixed with {selectedItem.mixSoup.name}</span>
                  <span>—</span>
                </p>
              )}
              {selectedItem.extras?.protein && (
                <p className="flex justify-between">
                  <span>
                    {selectedItem.extras.protein.quantity} ×{" "}
                    {selectedItem.extras.protein.name}
                  </span>
                  <span>
                    ₦{selectedItem.extras.protein.total.toLocaleString()}
                  </span>
                </p>
              )}
              {selectedItem.extras?.swallow && (
                <p className="flex justify-between">
                  <span>Extra {selectedItem.extras.swallow.name}</span>
                  <span>
                    ₦{selectedItem.extras.swallow.total.toLocaleString()}
                  </span>
                </p>
              )}
            </div>
            <p className="flex justify-between font-semibold border-t pt-3">
              <span>Item total</span>
              <span>₦{Number(selectedItem.amount).toLocaleString()}</span>
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Checkout;
