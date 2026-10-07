import { create } from "zustand";
import { persist } from "zustand/middleware";




export const useDelivery = create(

    persist(
      (set) => ({
address: null,
Phone: null,
info: null,
     

setField: (field, value) => {
    set({[field]: value})
},


resetForm: () => {
    set({address: "", phone: "", info: "",})
}

      }))  
    )

