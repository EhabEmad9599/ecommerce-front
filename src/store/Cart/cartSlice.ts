import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "../../types/product";
import { getCarTotalQuantitySelector } from "./selectors";

export interface ICartState {
  items:{[key: number]: number};
  productFullInfo: TProduct[]
}


const initialState: ICartState = {
  items:{},
  productFullInfo:[]
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
      
    }
  }
})



export {getCarTotalQuantitySelector};
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer