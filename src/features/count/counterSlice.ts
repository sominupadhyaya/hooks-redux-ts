// Represents logic and data for  one slice of state

import { createSlice , PayloadAction } from "@reduxjs/toolkit";

interface CounterState{
    value : number
}

const initialState: CounterState = {
    value : 0
}



const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        incremented(state){
            state.value++ // no need to do {...state} because redux toolkit uses
           // immer and wraps state and looks at mutations and turns it into safe 
           //and immutable update under the hood

        },
        amountAdded(state, action: PayloadAction<number>){
            state.value += action.payload
        }
    }
})

export const {incremented} = counterSlice.actions
export default counterSlice.reducer