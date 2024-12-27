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

      let cartObj = { obj: obj, quantity: 1 };

      let presentObj = state.items.find((ele) => ele.obj.id === objId);

      if (presentObj) {
        presentObj.quantity = presentObj.quantity + 1;
      } else {
        state.ids.push(objId);
        state.items.push(cartObj);
      }
    },

    removeCart: (state, action) => {
      let id = action.payload;

      let data = state.items.filter((cartObj) => cartObj.obj.id !== id);

      state.items = data;
      state.ids = state.ids.filter((id) => id !== action.payload);
    },

    addQuantity: (state, action) => {
      let objId = action.payload;
      let presentObj = state.items.find((ele) => ele.obj.id === objId);
      if (presentObj) presentObj.quantity += 1;
    },

    decreaseQuantity: (state, action) => {
      let objId = action.payload;
      let presentObj = state.items.find((ele) => ele.obj.id === objId);

      if (presentObj && presentObj.quantity > 1) {
        presentObj.quantity -= 1;
      } else {
        // If quantity is 1 or less, remove the item from the cart
        state.items = state.items.filter((cartObj) => cartObj.obj.id !== objId);
        state.ids = state.ids.filter((id) => id !== objId);
      }
    },

    clearCart: (state) => {
      state.items.length = 0;
      state.ids.length = 0;
    },
  },
});

export const { addCart, removeCart, clearCart, addQuantity, decreaseQuantity } =
  cart.actions;

export default cart.reducer;
