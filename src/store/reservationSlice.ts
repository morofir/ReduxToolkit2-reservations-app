import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface ReservationsState {
    value: string[]
}

//we have to say to typescript what kind of object this is
//array of string (interface) or just :string[]
const initialState:ReservationsState = {
    value:[]
}
export const reservationsSlice =createSlice({
    name:"reservations",
    initialState:initialState,
    reducers:{ //object
        addReservation:(state,action:PayloadAction<string>)=>{ //state,action(payload)
            state.value.push(action.payload);//do something
        },//get a number (index=action.payload) and remove it
        removeReservation:(state,action:PayloadAction<number>)=>{
            state.value.splice(action.payload,1);
            //(where,how many element to remove)
        }

    },
})
//we need to import the actions as well
export const { addReservation,removeReservation } = reservationsSlice.actions;
//actions....
export default reservationsSlice.reducer; //export the reducers