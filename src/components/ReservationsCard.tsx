import React from 'react'
import { StyleSheet, Text } from 'react-native'
import {useDispatch} from 'react-redux'
import { removeReservation } from '../store/reservationSlice';
import { addCustomer} from '../store/customerSlice';
import 'react-native-get-random-values';


interface ReservationCardType{
    name:string;
    index:number;
}

export default function ReservationCard({name,index}:ReservationCardType) {
    const dispatch = useDispatch();
    return (
           <Text onPress={()=>{
            dispatch(removeReservation(index));
            dispatch(addCustomer({
                id: guidGenerator(), //generate random unique id
                name, //name we getting allready
                food:[]
            }));
               
           }} style={styles.text}>{name}</Text>
    )
}
const styles = StyleSheet.create({
    text:{
        fontSize:18,
        padding:10,
        margin:3,
        borderWidth:1
    }
})

function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}