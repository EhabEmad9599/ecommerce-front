import { TProduct } from '../../types/product';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";


type TResponse = TProduct[];

const thunkGetProductsByItems = createAsyncThunk(
  "cart/thunkGetProductsByItems",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;
    const { cart } = getState() as RootState;
    const itemsId = Object.keys(cart.items);

    if (!itemsId.length) {
      return fulfillWithValue([]);
    }

    try {
      const concatenatedItemsId = itemsId.map((el) => `id=${el}`).join("&");
      console.log(concatenatedItemsId);
      const response = await axios.get<TResponse>(
        `http://localhost:5005/products?${concatenatedItemsId}`
      );
      // console.log(response.data);
      
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);

export default thunkGetProductsByItems;