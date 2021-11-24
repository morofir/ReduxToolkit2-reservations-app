import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput,Button}  from 'react-native'
import {useDispatch} from 'react-redux'
import { addFoodToCustomer} from '../store/customerSlice';

interface CustomerCardType{
    id:string;
    name:string;
    food:string[];
}


export default function CustomerCard({id,name,food}:CustomerCardType) {
    const dispatch = useDispatch();
    const [customerFoodInput,setCustomerFood] = useState("");

    const handleClick= () =>{
        if(!customerFoodInput) return; //empty value 
    
        // we need to dispatch the action
        dispatch(addFoodToCustomer({
            id,
            food: customerFoodInput
        }));
        setCustomerFood("");
    
    }
    
    return (
           <View style={styles.mainCardView}>
               <Text style={styles.text}>{name}</Text>
               {food.map(food =>{
                   return <Text style={styles.customer}>{food}</Text>
               })}

        <TextInput
        style={styles.input}
        placeholder="Add Food"
        numberOfLines={1}
        onChangeText={(e)=>setCustomerFood(e)}
        value={customerFoodInput}
        />
        <Button title="Add Food" onPress={handleClick}/>
        </View>
    )
}
const styles = StyleSheet.create({
    text:{
        fontSize:22,
        padding:10,
        margin:3,
        fontWeight:"bold"
        
    },
    customer:{
        padding:10,
    },
    mainCardView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        borderRadius: 15,
        shadowColor: "gray",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        flexDirection: 'column',
        marginTop: 6,
        marginBottom: 25,
        marginLeft: 5,
        marginRight: 5,
      },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,


    }
})