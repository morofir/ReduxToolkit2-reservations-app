import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from './reservationSlice'
import customerReducer from './customerSlice'



export const store = configureStore({
    reducer:{
        reservations:reservationReducer,
         customer:customerReducer
        //slice1:name

    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>; 
