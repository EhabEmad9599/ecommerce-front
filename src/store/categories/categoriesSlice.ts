import { createSlice } from "@reduxjs/toolkit";
import thunkGetCategories from "./thunk/thunkGetCategories";


export interface ICategoriesState {
  records: {id:number, title:string, prefix:string, img:string}[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}


const initialState: ICategoriesState = {
  records: [],
  loading: 'idle',
  error: null,
};


const categoriesSlice = createSlice({
  name:'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkGetCategories.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
    });
    builder.addCase(thunkGetCategories.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.records = action.payload;
    });
    builder.addCase(thunkGetCategories.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  }

})


export {thunkGetCategories}
export default categoriesSlice.reducer