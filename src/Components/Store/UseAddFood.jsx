import { create } from "zustand";
import { persist } from "zustand/middleware";

import white from "../../assets/white rice.jpg";
import jollof from "../../assets/jollof rice.jpg";
import ogbono from "../../assets/Ogbono soup.jpg";
import oha from "../../assets/oha soup.jpg";
import afang from "../../assets/Afang Soup.jpg";
import vegetable from "../../assets/Vegetable soup.jpg";
import bitterleaf from "../../assets/Bitterleaf soup.jpg";
import beans from "../../assets/Beans.jpg";
import spagetti from "../../assets/spagetti.jpg";
import plantain from "../../assets/plantain.jpg";
import moi from "../../assets/moi-moi.jpg";
import bread from "../../assets/bread.jpg";
import salad from "../../assets/salad.jpg";
import meat from "../../assets/meat.jpg";
import fish from "../../assets/fish.jpg";
import kpomo from "../../assets/Kpomo.jpg";
import egg from "../../assets/Egg.jpg";
import fufu from "../../assets/fufu.jpg";
import eba from "../../assets/Eba.jpg";
import semos from "../../assets/Semos.jpg";
import egusi from "../../assets/Egusi.jpg";
import turkey from "../../assets/Turkeys.jpg";
import chicken from "../../assets/chicken.jpg";
import coke from "../../assets/Coke.jpg";
import fanta from "../../assets/Fanta.jpg";
import malt from "../../assets/Malta.jpg";
import water from "../../assets/Water.jpg";
import yam from "../../assets/Yam.jpg";
import fried from "../../assets/fried.jpg";

export const useAddFood = create(
  persist((set) => ({
    MenuData: [
      {
        id: 1,
        name: "White Rice",
        category: "Rice",
        image: white,
        price: 500,
        orderType: "amount",
        status: "unavailable",
      },

      {
        id: 2,
        name: "Jollof Rice",
        category: "Rice",
        image: jollof,
        price: 500,
        orderType: "amount",
        status: "available",
      },

      {
        id: 3,
        name: "Ogbono Soup",
        category: "Soup",
        image: ogbono,
        status: "available",
      },

      {
        id: 4,
        name: "Oha Soup",
        category: "Soup",
        image: oha,
        status: "available",
      },

      {
        id: 5,
        name: "Afang Soup",
        category: "Soup",
        image: afang,
        status: "available",
      },

      {
        id: 6,
        name: "Vegetable Soup",
        category: "Soup",
        image: vegetable,
        status: "available",
      },

      {
        id: 7,
        name: "Bitterleaf Soup",
        category: "Soup",
        image: bitterleaf,
        status: "available",
      },

      {
        id: 8,
        name: "Beans",
        category: "Extras",
        image: beans,
        price: 300,
        orderType: "amount",
        status: "available",
      },

      {
        id: 9,
        name: "Spagetti",
        category: "Extras",
        image: spagetti,
        price: 200,
        orderType: "amount",
        status: "unavailable",
      },

      {
        id: 10,
        name: "Plaintain",
        category: "Extras",
        image: plantain,
        price: 200,
        orderType: "amount",
        status: "few-minutes",
      },

      {
        id: 11,
        name: "Moi-Moi",
        category: "Extras",
        image: moi,
        price: 500,
        orderType: "quantity",
        status: "available",
      },

      {
        id: 12,
        name: "Bread",
        category: "Extras",
        image: bread,
        price: 500,
        orderType: "quantity",
        status: "available",
      },

      {
        id: 13,
        name: "Salad",
        category: "Extras",
        image: salad,
        price: 400,
        orderType: "amount",
        status: "few-minutes",
      },

      {
        id: 14,
        name: "Meat(₦200)",
        category: "Protein",
        image: meat,
        price: 200,
        orderType: "quantity",
        status: "available",
      },

      {
        id: 15,
        name: "Fish",
        category: "Protein",
        image: fish,
        price: 1000,
        orderType: "quantity",
        status: "available",
      },

      {
        id: 16,
        name: "Kpomo",
        category: "Protein",
        image: kpomo,
        price: 200,
        orderType: "quantity",
        status: "few-minutes",
      },

      {
        id: 17,
        name: "Egg",
        category: "Protein",
        image: egg,
        price: 400,
        orderType: "quantity",
        status: "available",
      },

      {
        id: 18,
        name: "Fufu",
        category: "Swallow",
        image: fufu,
        price: 300,
        status: "available",
      },

      {
        id: 19,
        name: "Eba",
        category: "Swallow",
        image: eba,
        price: 300,
        status: "available",
      },

      {
        id: 20,
        name: "Semo",
        category: "Swallow",
        image: semos,
        price: 300,
        status: "available",
      },

      {
        id: 21,
        name: "Egusi Soup",
        category: "Soup",
        image: egusi,
        status: "available",
      },

      {
        id: 22,
        name: "Turkey",
        category: "Protein",
        image: turkey,
        price: 2000,
        orderType: "quantity",
        status: "available",
      },

      {
        id: 23,
        name: "Chicken",
        category: "Protein",
        image: chicken,
        price: 2000,
        orderType: "quantity",
        status: "available",
      },

      {
        id: 24,
        name: "Bottle-Water",
        category: "Drinks",
        image: water,
        price: 200,
        orderType: "quantity",
        status: "available",
      },

      {
        id: 25,
        name: "Malta Guiness",
        category: "Drinks",
        image: malt,
        price: 1000,
        orderType: "quantity",
        status: "available",
      },

      {
        id: 26,
        name: "Coke",
        category: "Drinks",
        image: coke,
        price: 500,
        orderType: "quantity",
        status: "available",
      },

      {
        id: 27,
        name: "Fanta",
        category: "Drinks",
        image: fanta,
        price: 500,
        orderType: "quantity",
        status: "available",
      },

      {
        id: 28,
        name: "yam",
        category: "Extras",
        image: yam,
        price: 200,
        orderType: "quantity",
        status: "available",
      },

      {
        id: 29,
        name: "Fried Rice",
        category: "Rice",
        image: fried,
        price: 500,
        orderType: "amount",
        status: "available",
      },

      {
        id: 30,
        name: "Meat(N500)",
        category: "Protein",
        image: meat,
        price: 500,
        orderType: "quantity",
        status: "available",
      },
    ],

    addFood: (food) =>
      set((state) => ({
        MenuData: [
          ...state.food,
          {
            ...food,
            id: Date.now(),
          },
        ],
      })),

    deleteFood: (id) =>
      set((state) => ({
        MenuData: state.MenuData.filter((food) => food.id !== id),
      })),

    updateFood: (id, updatedFood) =>
      set((state) => ({
        MenuData: state.MenuData.map((food) =>
          food.id === id ? { ...food, ...updatedFood } : food,
        ),
      })),

    updateStatus: (id, status) =>
      set((state) => ({
        MenuData: state.MenuData.map((food) =>
          food.id == id ? { ...food, status } : food,
        ),
      })),
  })),
  {
    name: "Add-Food",
  },
);
