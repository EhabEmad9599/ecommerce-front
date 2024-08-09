import { createSlice } from "@reduxjs/toolkit";

export interface IProductsState {
  records: {id:number, title:string, prefix:string, img:string}[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}


const initialState: IProductsState = {
  records: [],
  loading: 'idle',
  error: null,
};


const productsSlice = createSlice({
  name:'products',
  initialState,
  reducers: {}
})


export default productsSlice.reducer