import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from './ProductSlice.jsx'

export  const store =configureStore({
    reducer:{
product:ProductSlice
    }
})

export default store