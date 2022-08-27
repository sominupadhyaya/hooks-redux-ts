// Represents logic and data for  one slice of state

import { createSlice , PayloadAction } from "@reduxjs/toolkit";

interface CounterState{
    value : number
}

const initalState: CounterState = {
    value : 0
}



const counterSlice = createSlice({
    name : 'counter',
    initalState,
    reducers : {
        incremented(state){
            state.value++ // no need to do {...state} because redux toolkit uses
           // immer and wraps state and looks at mutations and turns it into safe and immutable update
        }
    }
})

