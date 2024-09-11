import { createSlice } from "@reduxjs/toolkit";
import thunkLikeToggle from "./thunkLikeToggle";


export interface IWishlistState {
  itemsId: number[]
}

const initialState: IWishlistState = {
  itemsId: []
}


const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {

  }
});


export {thunkLikeToggle};
export default wishlistSlice.reducer;