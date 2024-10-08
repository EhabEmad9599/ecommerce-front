import { TProduct } from '../../../types/product';
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = TProduct[];

const thunkGetWishlist = createAsyncThunk('wishlist/thunkGetWishlist', async(_, thunkAPI) => {
  const {rejectWithValue, fulfillWithValue, signal} = thunkAPI;
  try {
    const userWishlist = await axios.get<{productId: number}[]>(`http://localhost:5005/wishlist?userId=1`, {signal});
    if(!userWishlist.data.length) {
      return fulfillWithValue([])
    }
    
    const concatenatedItemsId = userWishlist.data
    .map((el) => `id=${el.productId}`)
    .join("&");

    // http://localhost:5005/products?${concatenatedItemsId}
    const response = await axios.get<TResponse>(
      `http://localhost:5005/products?${concatenatedItemsId}`
    );
    console.log(response.data);
    
    return response.data;
    
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message || error.message);
    } else {
      return rejectWithValue("An unexpected error");
    }
  }
})


export default thunkGetWishlist;