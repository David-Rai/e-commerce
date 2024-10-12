import { createSlice } from "@reduxjs/toolkit";

const DateSlice=createSlice({
    name:"date",
    initialState:[],
    reducers:{
        addDate:(state,action)=> {
            state.push(action.payload)
        }
    }
})

export const {addDate}=DateSlice.actions
export default DateSlice.reducer