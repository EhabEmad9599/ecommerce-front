// import { ICategoriesState } from './../categories/categoriesSlice';
import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "../../types/shared";
import { TProduct } from "../../types/product";
import thunkGetProductsByCatPrefix from "./thunk/thunkGetProductsByCatPrefix";

export interface ICategoriesState {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
}


const initialState: ICategoriesState = {
  records: [],
  loading: 'idle',
  error: null,
};


const productsSlice = createSlice({
  name:'products',
  initialState,
  reducers: {
    cleanUpProductsRecords: (state) => {
      state.records = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(thunkGetProductsByCatPrefix.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
    });
    builder.addCase(thunkGetProductsByCatPrefix.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.records = action.payload;
    });
    builder.addCase(thunkGetProductsByCatPrefix.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  }
  
})


export const {cleanUpProductsRecords} = productsSlice.actions;
export default productsSlice.reducer