// Represents logic and data for  one slice of state

import { createSlice , PayloadAction } from "@reduxjs/toolkit";

interface CounterState{
    value : number
}

const initalState: CounterState = {
    value : 0
}