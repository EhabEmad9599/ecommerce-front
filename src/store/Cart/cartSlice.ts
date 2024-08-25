import { createSlice } from "@reduxjs/toolkit";
import { getCarTotalQuantitySelector } from "./selectors";
import thunkGetProductsByItems from "./thunkGetProductsByItems";
import { TProduct } from "../../types/product";
import { TLoading } from '../../types/shared';

export interface ICartState {
  items:{[key: string]: number};
  productsFullInfo: TProduct[];
  loading: TLoading;
  error: null | string;
}


const initialState: ICartState = {
  items:{},
  productsFullInfo:[],
  loading:'idle',
  error: null
};

const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{
    addToCart: (state, action) => {
      const id = action.payload;
      if(state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
      
    },
    cartItemChangeQuantity: (state, action) => {
      state.items[action.payload.id] = action.payload.quantity;
    },

    cartItemRemove: (state, action) => {
      delete state.items[action.payload];
      state.productsFullInfo = state.productsFullInfo.filter((el) => el.id !== action.payload
    );
},

  },
  extraReducers: (builder) => {
    builder.addCase(thunkGetProductsByItems.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
    });
    builder.addCase(thunkGetProductsByItems.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.productsFullInfo = action.payload;
    });
    builder.addCase(thunkGetProductsByItems.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  }
})



export {getCarTotalQuantitySelector, thunkGetProductsByItems};
export const {addToCart, cartItemChangeQuantity, cartItemRemove} = cartSlice.actions;
export default cartSlice.reducer