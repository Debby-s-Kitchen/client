import Modal from "../../UI/modal";
import Input from "../../UI/input";
import Button from "../../UI/button";
import { useState } from "react";
import { usePlateStore } from "../../Store/PlateStore";
import { useAddFood } from '../../../../../../admin/src/Store/UseAddFood';

const PAIR_CATEGORY = {
  Soup: "Swallow",
  Swallow: "Soup",
};
const EXCLUDED_FROM_AMOUNT = ["Protein", "Soup", "Swallow"];
const MIN_AMOUNT_RULES = [
  { keyword: "spaghetti", min: 200 },
  { keyword: "beans", min: 200 },
  { keyword: "salad", min: 400 },
];
const MIN_RICE_AMOUNT = 500;
const EXCLUDED_MIX_SOUPS = ["afang", "vegetable"];

const COMBO_PRICES = {
  3: { 18: 1900, 19: 1900, 20: 2100 },
  4: { 18: 1700, 19: 1700, 20: 1900 },
  5: { 18: 2100, 19: 2100, 20: 2100 },
  6: { 18: 2100, 19: 2100, 20: 2100 },
  7: { 18: 1900, 19: 1900, 20: 2100 },
  21: { 18: 1900, 19: 1900, 20: 2100 },
};




const QuantityStepper = ({ label, value, onChange, min = 1 }) => (
  <div>
    {label && (
      <label className="block mb-1 text-sm text-gray-600">{label}</label>
    )}
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="w-9 h-9 flex items-center justify-center rounded border text-lg font-bold disabled:opacity-40"
        disabled={value <= min}
      >
        −
      </button>

      <span className="w-10 text-center text-base">{value}</span>

      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="w-9 h-9 flex items-center justify-center rounded border text-lg font-bold"
      >
        +
      </button>
    </div>
  </div>
);

const MenuModal = ({ isOpen, setIsOpen, product }) => {
  const [amount, setAmount] = useState("");
  const [quantity, setQuantity] = useState(1);
const MenuData = useAddFood((state) => state.MenuData);
  const [selectedPairId, setSelectedPairId] = useState("");
  const [selectedProteinId, setSelectedProteinId] = useState("");
  const [proteinQuantity, setProteinQuantity] = useState(1);
  const [selectedExtraSwallowId, setSelectedExtraSwallowId] = useState("");
  const [selectedMixSoupId, setSelectedMixSoupId] = useState("");

  const isQuantityBased = product.orderType === "quantity";
  const pairCategory = PAIR_CATEGORY[product.category];
  const isPaired = Boolean(pairCategory);

  const addPlate = usePlateStore((state) => state.addPlate);

  const isAmountBased =
    !isPaired &&
    !isQuantityBased &&
    !EXCLUDED_FROM_AMOUNT.includes(product.category);

  const productName = (product.name || "").toLowerCase();

  const matchedRule = MIN_AMOUNT_RULES.find((rule) =>
    productName.includes(rule.keyword),
  );

  const minAmount = matchedRule
    ? matchedRule.min
    : product.category === "Rice"
      ? MIN_RICE_AMOUNT
      : 0;

  const isBelowMinimum =
    isAmountBased &&
    minAmount > 0 &&
    amount !== "" &&
    Number(amount) < minAmount;

  const canAddExtras =
    product.category === "Soup" || product.category === "Swallow";

  const pairOptions = isPaired
    ? MenuData.filter((item) => item.category === pairCategory)
    : [];

  const selectedPairItem = pairOptions.find(
    (item) => item.id === Number(selectedPairId),
  );
  const pairChosen = Boolean(selectedPairItem);
  let soupId;
  let swallowId;
  if (product.category === "Soup") {
    soupId = product.id; 
    swallowId = selectedPairItem?.id;
  }
  if (product.category === "Swallow") {
    soupId = selectedPairItem?.id; 
    swallowId = product.id;
  }
  const canMixSoup = isPaired && pairChosen;
  const mixSoupOptions = canMixSoup
    ? MenuData.filter((item) => {
        if (item.category !== "Soup") return false; 
        if (item.id === soupId) return false; 
        const name = (item.name || "").toLowerCase();
       
        return !EXCLUDED_MIX_SOUPS.some((keyword) => name.includes(keyword));
      })
    : [];
  const selectedMixSoup = mixSoupOptions.find(
    (item) => item.id === Number(selectedMixSoupId),
  );

  const comboTotal =
    soupId && swallowId ? COMBO_PRICES[soupId]?.[swallowId] || 0 : 0;
  const quantityTotal = quantity * (product.price || 0);
  const selectedProtein = MenuData.find(
    (item) =>
      item.id === Number(selectedProteinId) && item.category === "Protein",
  );
  const proteinTotal =
    selectedProtein && proteinQuantity > 0
      ? (selectedProtein.price || 0) * proteinQuantity
      : 0;
  const selectedExtraSwallow = MenuData.find(
    (item) =>
      item.id === Number(selectedExtraSwallowId) && item.category === "Swallow",
  );
  const extraSwallowTotal = selectedExtraSwallow?.price || 0;
  const extrasTotal = proteinTotal + extraSwallowTotal;
  const finalComboTotal = comboTotal + extrasTotal;
  const grandTotal = isPaired
    ? finalComboTotal
    : isQuantityBased
      ? quantityTotal
      : isAmountBased
        ? Number(amount) || 0
        : 0;
  const handleClick = () => {
    let itemToAdd;
    if (isPaired) {
      if (!pairChosen) return;
      if (comboTotal === 0) {
        alert("Price for this combination has not been set.");
        return;
      }
      itemToAdd = {
        id: product.id,
        cartItemId: crypto.randomUUID(),
        name: `${product.name} + ${selectedPairItem.name}${
          selectedMixSoup ? ` (mixed with ${selectedMixSoup.name})` : ""
        }`,
        image: product.image,
        amount: finalComboTotal,
        quantity: 1,
        isCombo: true,
        soupId: soupId,
        swallowId: swallowId,
        pairId: selectedPairItem.id,
        mixSoup: selectedMixSoup
          ? { id: selectedMixSoup.id, name: selectedMixSoup.name }
          : null,
        extras: canAddExtras
          ? {
              protein: selectedProtein
                ? {
                    id: selectedProtein.id,
                    name: selectedProtein.name,
                    price: selectedProtein.price,
                    quantity: proteinQuantity,
                    total: proteinTotal,
                  }
                : null,
              swallow: selectedExtraSwallow
                ? {
                    id: selectedExtraSwallow.id,
                    name: selectedExtraSwallow.name,
                    price: selectedExtraSwallow.price,
                    total: extraSwallowTotal,
                  }
                : null,
              total: extrasTotal,
            }
          : null,
      };
    } else if (isQuantityBased) {
      itemToAdd = {
        ...product,
        cartItemId: crypto.randomUUID(),
        amount: quantityTotal,
        quantity: quantity,
        extras: null,
      };
    } else if (isAmountBased) {
      if (amount === "" || Number(amount) <= 0) {
        return;
      }
      if (isBelowMinimum) {
        return;
      }
      itemToAdd = {
        ...product,
        cartItemId: crypto.randomUUID(),
        amount: Number(amount),
        extras: null,
      };
    } else {
      alert("This item has no pricing option configured.");
      return;
    }
    addPlate(itemToAdd);
    setIsOpen(false);
    setSelectedPairId("");
    setSelectedMixSoupId(""); 
    setSelectedProteinId("");
    setProteinQuantity(1);
    setSelectedExtraSwallowId("");
    setAmount("");
    setQuantity(1);
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="How much">
      {isPaired ? (
        <div>
          <label className="block mb-1 text-sm text-gray-600">
            Choose your {pairCategory}
          </label>
          <select
            value={selectedPairId}
            onChange={(e) => {
              setSelectedPairId(e.target.value);
              if (product.category === "Swallow") {
                setSelectedMixSoupId("");
              }
            }}
            className="border rounded px-3 py-2 w-full"
          >
            <option value="">-- Select {pairCategory} --</option>
            {pairOptions.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          {pairChosen && comboTotal === 0 && (
            <div className="mt-3">
              <p className="text-sm text-red-500">
                Price for this combination has not been set.
              </p>
            </div>
          )}

          {canMixSoup && (
            <div className="mt-4">
              <label className="block mb-1 text-sm text-gray-600">
                Mix with another soup (optional)
              </label>

              <select
                value={selectedMixSoupId}
                onChange={(e) => setSelectedMixSoupId(e.target.value)}
                className="border rounded px-3 py-2 w-full"
              >
                <option value="">-- No mix --</option>

                {mixSoupOptions.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      ) : isQuantityBased ? (
        <QuantityStepper
          label="Quantity"
          value={quantity}
          onChange={setQuantity}
          min={1}
        />
      ) : isAmountBased ? (
        <div>
          <Input
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
          />

          {isBelowMinimum && (
            <p className="mt-1 text-sm text-red-500">
              Please, {product.name} starts from ₦{minAmount}
            </p>
          )}
        </div>
      ) : (
        <p className="text-sm text-red-500">
          This item has no pricing option configured.
        </p>
      )}

      {canAddExtras && (
        <div className="mt-4 space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-600">
              Add Extra Protein
            </label>

            <select
              value={selectedProteinId}
              onChange={(e) => setSelectedProteinId(e.target.value)}
              className="border rounded px-3 py-2 w-full"
            >
              <option value="">-- Add Extra Protein --</option>

              {MenuData.filter((item) => item.category === "Protein").map(
                (item) => (
                  <option key={item.id} value={item.id}>
                    {item.name} — ₦{item.price?.toLocaleString()}
                  </option>
                ),
              )}
            </select>

            {selectedProtein && (
              <div className="mt-2">
                <QuantityStepper
                  label={`Quantity of ${selectedProtein.name}`}
                  value={proteinQuantity}
                  onChange={setProteinQuantity}
                  min={1}
                />
              </div>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-600">
              Add Extra Swallow
            </label>
            <select
              value={selectedExtraSwallowId}
              onChange={(e) => setSelectedExtraSwallowId(e.target.value)}
              className="border rounded px-3 py-2 w-full"
            >
              <option value="">-- Add Extra Swallow --</option>

              {MenuData.filter((item) => item.category === "Swallow").map(
                (item) => (
                  <option key={item.id} value={item.id}>
                    {item.name} — ₦{item.price?.toLocaleString()}
                  </option>
                ),
              )}
            </select>
          </div>
        </div>
      )}

      <div className="mt-4 border-t pt-3 space-y-1">
        {isPaired && pairChosen && comboTotal > 0 && (
          <p className="text-sm text-gray-500 flex justify-between">
            <span>
              {product.name} + {selectedPairItem.name}
            </span>
            <span>₦{comboTotal.toLocaleString()}</span>
          </p>
        )}

        {/* Show the mix soup in the summary (no price, so no amount shown) */}
        {selectedMixSoup && (
          <p className="text-sm text-gray-500 flex justify-between">
            <span>Mixed with {selectedMixSoup.name}</span>
            <span>—</span>
          </p>
        )}

        {isQuantityBased && (
          <p className="text-sm text-gray-500 flex justify-between">
            <span>
              {quantity} × {product.name}
            </span>
            <span>₦{quantityTotal.toLocaleString()}</span>
          </p>
        )}

        {isAmountBased && amount !== "" && Number(amount) > 0 && (
          <p className="text-sm text-gray-500 flex justify-between">
            <span>{product.name}</span>
            <span>₦{Number(amount).toLocaleString()}</span>
          </p>
        )}

        {selectedProtein && (
          <p className="text-sm text-gray-500 flex justify-between">
            <span>
              {proteinQuantity} × {selectedProtein.name}
            </span>
            <span>₦{proteinTotal.toLocaleString()}</span>
          </p>
        )}

        {selectedExtraSwallow && (
          <p className="text-sm text-gray-500 flex justify-between">
            <span>Extra {selectedExtraSwallow.name}</span>
            <span>₦{extraSwallowTotal.toLocaleString()}</span>
          </p>
        )}

        {grandTotal > 0 && (
          <p className="font-bold flex justify-between pt-2 border-t">
            <span>Total</span>
            <span>₦{grandTotal.toLocaleString()}</span>
          </p>
        )}
      </div>

      <Button
        variant="primary"
        className="mt-4 px-4 py-2 rounded text-white flex justify-center items-center"
        onClick={handleClick}
        disabled={
          (isPaired && (!pairChosen || comboTotal === 0)) ||
          (isAmountBased && (amount === "" || Number(amount) <= 0)) ||
          isBelowMinimum ||
          (!isPaired && !isQuantityBased && !isAmountBased)
        }
      >
        Submit
      </Button>
    </Modal>
  );
};

export default MenuModal;