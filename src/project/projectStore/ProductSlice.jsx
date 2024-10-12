import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk("fetching", async () => {
  const response = await fetch(`https://fakestoreapi.com/products?limit=20`);
  return response.json();
});

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    data:[],
    cartData:[]
  },
  reducers: {
    addProduct: (state, action) => {
      state.cartData.push({
        category:action.payload.category,
        price:action.payload.price,
        imgUrl:action.payload.image
      })
    },
    removeProduct:(state,action)=>{
      const filtered=state.cartData.filter((cart,index)=> index !== action.payload)
      state.cartData=filtered
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.data=action.payload
    });
  },
});

export const {  addProduct , removeProduct }=ProductSlice.actions
export default ProductSlice.reducer