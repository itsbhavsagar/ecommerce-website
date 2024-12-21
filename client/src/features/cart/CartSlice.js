import { createSlice } from '@reduxjs/toolkit';

let cart = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    ids: [],
  },
  reducers: {
    addCart: (state, action) => {
      let obj = action.payload;

      let objId = obj.id;

      console.log(state.ids.find((id) => id === objId));
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
