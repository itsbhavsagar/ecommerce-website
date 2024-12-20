import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addCart: (state, action) => {
      state.items.push(action.payload);
    },

    removeCart: (state, action) => {
      let id = action.payload;

      let data = state.items.filter((obj) => {
        return obj.id != id;
      });

      state.items = data;
    },

    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addCart, removeCart, clearCart } = cart.actions;

export default cart.reducer;
