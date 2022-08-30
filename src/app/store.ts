import { configureStore } from "@reduxjs/toolkit";

import counterReducer from '../features/count/counterSlice'
import { apiSlice } from "../features/dogs/dogsApiSlice";

export const store = configureStore({
    reducer : {    
    counter : counterReducer,
    [apiSlice.reducerPath] : apiSlice.reducer
    }
})

export type AppDispatch  = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>