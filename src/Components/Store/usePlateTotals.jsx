import { usePlateStore } from "./PlateStore";




export const usePlateTotal = () => {


const TAKEAWAY_FEE_PER_SWALLOW = 200;
const BIKE_FEE = 300;
const Service_charge = 100;

const isBikeFEEon = usePlateStore((state) => state.isBikeFEEon);
const cart = usePlateStore((state) => state.cart);
const isTakeawayFeeOn = usePlateStore((state) => state.isTakeawayFeeOn);


const foodTotal = cart.reduce((runningTotal, item) => {
    return runningTotal + Number(item?.amount || 0);
}, 0);



const swallowCount = cart.filter((item) => item?.isCombo). length;

const takeawayFee = isTakeawayFeeOn
    ? Math.max(swallowCount, 1) * TAKEAWAY_FEE_PER_SWALLOW
    : 0;


    const bikeFee = isBikeFEEon? BIKE_FEE : 0;
 const total = foodTotal + takeawayFee + bikeFee + Service_charge;



     return {
    foodTotal,
    swallowCount,
    takeawayFee,
    bikeFee,
    total,
    Service_charge,
    TAKEAWAY_FEE_PER_SWALLOW,
  };







};