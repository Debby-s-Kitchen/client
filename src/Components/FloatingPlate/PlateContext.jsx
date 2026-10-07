// // src/context/PlateContext.jsx
// import { createContext, useContext, useState, useEffect } from "react";

// const PlateContext = createContext();

// const TAKEAWAY_FEE_PER_SWALLOW = 200;
// const BIKE_FEE = 300;

// export const PlateProvider = ({ children }) => {
//   // NEW: lazy initializer — this function only runs once, on first mount,
//   // to check localStorage for a previously saved cart before defaulting to [].
//   const [items, setPlateItems] = useState(() => {
//     try {
//       const saved = localStorage.getItem("plateItems");
//       return saved ? JSON.parse(saved) : [];
//     } catch {
//       return [];
//     }
//   });

//   const [isBikeFeeOn, setIsBikeFeeOn] = useState(() => {
//     try {
//       return JSON.parse(localStorage.getItem("isBikeFeeOn")) ?? false;
//     } catch {
//       return false;
//     }
//   });

//   const [isTakeawayFeeOn, setIsTakeawayFeeOn] = useState(() => {
//     try {
//       return JSON.parse(localStorage.getItem("isTakeawayFeeOn")) ?? false;
//     } catch {
//       return false;
//     }
//   });

//   // NEW: every time items (or the fee toggles) change, re-save to
//   // localStorage — this is what makes a refresh not lose the cart.
//   useEffect(() => {
//     localStorage.setItem("plateItems", JSON.stringify(items));
//   }, [items]);

//   useEffect(() => {
//     localStorage.setItem("isBikeFeeOn", JSON.stringify(isBikeFeeOn));
//   }, [isBikeFeeOn]);

//   useEffect(() => {
//     localStorage.setItem("isTakeawayFeeOn", JSON.stringify(isTakeawayFeeOn));
//   }, [isTakeawayFeeOn]);

//   // NEW: totals computed HERE, once, so FloatingPlate and Checkout both
//   // read the same numbers instead of each recalculating (and risking
//   // the two-different-answers bug you hit earlier with the fees).
//   const foodTotal = items.reduce(
//     (sum, item) => sum + Number(item.amount || 0),
//     0,
//   );
//   const swallowCount = items.filter((item) => item.isCombo).length;
//   const takeawayFee = isTakeawayFeeOn
//     ? Math.max(swallowCount, 1) * TAKEAWAY_FEE_PER_SWALLOW
//     : 0;
//   const bikeFee = isBikeFeeOn ? BIKE_FEE : 0;
//   const total = foodTotal + takeawayFee + bikeFee;

//   const value = {
//     items,
//     setPlateItems,
//     isBikeFeeOn,
//     setIsBikeFeeOn,
//     isTakeawayFeeOn,
//     setIsTakeawayFeeOn,
//     swallowCount,
//     takeawayFee,
//     bikeFee,
//     foodTotal,
//     total,
//   };

//   return (
//     <PlateContext.Provider value={value}>{children}</PlateContext.Provider>
//   );
// };

// // NEW: a small custom hook so every component just does `usePlate()`
// // instead of importing useContext + PlateContext everywhere.
// export const usePlate = () => useContext(PlateContext);