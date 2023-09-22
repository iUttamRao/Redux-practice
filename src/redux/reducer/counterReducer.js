import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    counter :0,
}

const counter =createSlice({
    name : 'counter',
    initialState,
    reducers :{
        incrementCounter :(state,action) =>{
            state.counter =state.counter + Number(action.payload);
        },
        decrementCounter : (state,action) =>{
            state.counter = state.counter - Number(action.payload);
        }
    }
})

export default counter.reducer;
export const {incrementCounter,decrementCounter} = counter.actions;