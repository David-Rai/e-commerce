import { configureStore } from "@reduxjs/toolkit";
import userSlice from './UserSlice.jsx'
import DateSlice from './DateSlice.jsx'
import TodoSlice from './TodoSlice.jsx'

const store =configureStore({
    
    reducer:{
        user:userSlice,
        date:DateSlice,
        todo:TodoSlice
    }
})

export default store