import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
    value: Customer[];
}
interface Customer{ 
    id:string;
    name:string;
    food:string[];
}
interface FoodCustomer{
    food:string;
    id:string;

}
//we have to say to typescript what kind of object this is
//array of string (interface) or just :string[]
const initialState:CustomerState = {
    value:[]
}
export const customerSlice = createSlice({
    name:"customer",
    initialState:initialState,
    reducers:{ //object

        addCustomer:(state,action:PayloadAction<Customer>)=>{ //state,action(payload)
            state.value.push(action.payload);//do something
        },
        addFoodToCustomer:(state,action:PayloadAction<FoodCustomer>)=>{ //state,action(payload)}
            state.value.forEach(customer =>{
                if(customer.id === action.payload.id){
                    customer.food.push(action.payload.food);
                }});
                        
            }
        },
    })
//we need to import the actions as well
export const { addCustomer , addFoodToCustomer} = customerSlice.actions;
//actions....
export default customerSlice.reducer; //export the reducers