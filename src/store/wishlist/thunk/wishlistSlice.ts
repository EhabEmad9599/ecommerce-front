import { createSlice } from "@reduxjs/toolkit";
import thunkLikeToggle from "./thunkLikeToggle";
import { TProduct } from "../../../types/product";


export interface IWishlistState {
  itemsId: number[];
  productsFullInfo: TProduct[];
  error: null | string;
}

const initialState: IWishlistState = {
  itemsId: [],
  productsFullInfo: [],
  error: null,
}


const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkLikeToggle.pending, (state) => {
      state.error = null
    });

    builder.addCase(thunkLikeToggle.fulfilled, (state, action) => {
      if (action.payload.type === "add") {
        state.itemsId.push(action.payload.id);
      } else {
        state.itemsId = state.itemsId.filter((el) => el !== action.payload.id);
        state.productsFullInfo = state.productsFullInfo.filter(
          (el) => el.id !== action.payload.id
        );
      }
    });

    builder.addCase(thunkLikeToggle.rejected, (state, action) => {
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  }
});


export {thunkLikeToggle};
export default wishlistSlice.reducer;