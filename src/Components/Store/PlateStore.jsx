import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePlateStore = create(
  persist(
    (set) => ({
      cart: [],

      
isBikeFEEon: false,
      isTakeawayFeeOn: false,

      addPlate: (item) => {
        set((state) => ({
          cart: [...state.cart, item],
        }));
      },

      
      removeFromCart: (cartItemId) => {
  set((state) => ({
    cart: state.cart.filter((item) => item.cartItemId !== cartItemId),
  }));
},

    
      removeByProductId: (productId) => {
        set((state) => ({
          cart: state.cart.filter(
            (item) => item.id !== productId && item.productId !== productId,
          ),
        }));
      },


setBikeFee: (value) => set({isBikeFEEon: value}),
setTakeawayFee: (value) => set({isTakeawayFeeOn: value}),



     clearCart: () => {
        set({ cart: [], isBikeFeeOn: false, isTakeawayFeeOn: false });
      },




    }),
    {
      name: "plate-storage",
    },
  ),
);