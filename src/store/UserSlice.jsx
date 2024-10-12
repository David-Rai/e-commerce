import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload)
        },
        deleteUser:(state,action)=>{
        state.pop(action.payload)
        },
        removeAlluser:(state,action)=>{
        return []
        },
    }
})

export const  { addUser ,deleteUser , removeAlluser} = userSlice.actions
export default userSlice.reducer