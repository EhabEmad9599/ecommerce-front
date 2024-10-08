import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TCategory } from "../../../types/category";


type TResponse = TCategory[];

const thunkGetCategories = createAsyncThunk('categories/thunkGetCategories', async(_,thunkAPI) => {
  const {rejectWithValue, signal} = thunkAPI;

  try {
    const response = await axios.get<TResponse>('http://localhost:5005/categories', {signal});
    return response.data;
    
    
  } catch (error) {

    if(axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message || error.message);
    } else {
      return rejectWithValue('An unexpected error')
    }
  }

})


export default thunkGetCategories;