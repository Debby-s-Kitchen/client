import Input from "../../Components/UI/input";
import Button from "../../Components/UI/button";
import { useNavigate } from "react-router-dom";
import { useDelivery } from "../../Components/Store/DeliveryDetail";

const Address = () => {
  const address = useDelivery((state) => state.address);
  const phone = useDelivery((state) => state.phone);
  const info = useDelivery((state) => state.info);
  const setField = useDelivery((state) => state.setField);

  const navigate = useNavigate();

  const isFormValid = address.trim() !== "" && phone.trim() !== "";

  return (
    <div className="min-h-screen flex justify-center items-start px-4 py-10 md:py-16">
      <div className="w-full max-w-md border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
        <div className="text-center mb-6">
          <h1 className="font-bold text-2xl sm:text-3xl">Delivery Details</h1>
          <p className="text-gray-500 text-sm mt-1">
            Tell us where to bring your food.
          </p>
        </div>

        <div className="space-y-5">
          <Input
            label="Delivery address"
            className="w-full"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setField("address", e.target.value)}
          />

          <Input
            label="Phone number"
            className="w-full"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setField("phone", e.target.value)}
          />

          <Input
            label="Special info (optional)"
            className="w-full h-32 align-top resize-none p-3"
            placeholder="Any extra info on how you want your food served?"
            multiline
            rows={5}
            value={info}
            onChange={(e) => setField("info", e.target.value)}
          />
        </div>

        <div className="mt-8">
          <Button
            variant="secondary"
            className="w-full h-11"
            onClick={() => navigate("/checkout")}
            disabled={!isFormValid}
          >
            Continue to Checkout
          </Button>

          {!isFormValid && (
            <p className="text-xs text-gray-400 text-center mt-2">
              Address and phone number are required.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Address;
