import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from './reservationSlice'
import customerReducer from './customerSlice'



export const store = configureStore({
    reducer:{
        reservations:reservationReducer,
         customer:customerReducer
        //slice1:s
        //slice2:ss
    }
})
//this have to be first
export type AppDispatch = typeof store.dispatch;

//this have to be second line
export type RootState = ReturnType<typeof store.getState>; //we need it here
