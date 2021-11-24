import React from 'react';
import { View, Text, Button, StyleSheet,TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from '../store/reservationSlice';
import { RootState } from '../store/store';
import ReservationsCard from './ReservationsCard';


const Reservations = () => {

    // const [text, onChangeText] = React.useState("Full Name");
    const [reservationsNameInput,setreservationsNameInput] = React.useState("")
    const reservations = useSelector((state:RootState) => state.reservations.value)

    const dispatch = useDispatch();

    const handleClick= () =>{
        if(!reservationsNameInput) return; //empty value 

        // we need to dispatch the action
        dispatch(addReservation(reservationsNameInput));
        setreservationsNameInput("");

    }
    return(
    <View style={styles.card}>
      <TextInput
        style={styles.input}
        onChangeText={setreservationsNameInput}
        value={reservationsNameInput}
        placeholder="Full Name"
        numberOfLines={1}
      />
        <Button title={'Reserve a Seat'} onPress={handleClick}/>
        
        <View style={styles.names}>
        {reservations.map((name,index) =>{
            return <ReservationsCard name={name} index={index}/>
        })}
        </View>
    </View>
    );
};
export default Reservations;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
      },
      text: {
        fontSize: 18
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      names:{
          margin:10,
          marginTop:100,
          flexDirection:'row',
      },
      card:{
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
      }
});

