import {createSlice} from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTodos=createAsyncThunk("fetchingTodos",async ()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/todos")
    return response.json()
})

const TodoSlice=createSlice({
    name:"todo",
    initialState:{
        isLoading:false,
        data:null,
        isError:false

    },
    extraReducers:(builder)=>{

        builder.addCase(fetchTodos.fulfilled,(state,action)=>{
        state.isLoading=false
        state.data=action.payload
    })

builder.addCase(fetchTodos.pending,(state,action)=>{
state.isLoading=true
state.data=action.payload
})

builder.addCase(fetchTodos.rejected,(state,action)=>{
    state.isLoading=true
    state.data=action.payload
    state.isError=true
    })
    }
})


export default TodoSlice.reducer
