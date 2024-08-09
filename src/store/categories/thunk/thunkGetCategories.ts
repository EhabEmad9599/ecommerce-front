import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


type TResponse = {id:number, title:string, prefix:string, img:string}[];

const thunkGetCategories = createAsyncThunk('categories/thunkGetCategories', async(_,thunkAPI) => {
  const {rejectWithValue} = thunkAPI;

  try {
    const response = await axios.get<TResponse>('http://localhost:5005/categories');
    console.log(response);
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