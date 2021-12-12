import React,{useEffect, useRef,useCallback} from 'react';
import { View, Text, Button, StyleSheet,TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from '../store/reservationSlice';
import { RootState } from '../store/store';
import ReservationsCard from './ReservationsCard';

const Reservations = () => {

    // const [text, onChangeText] = React.useState("Full Name");
    const [reservationsNameInput,setreservationsNameInput] = React.useState("")
    
    const renderCount = useRef(0);


    // const inputRef:TextInput = useRef("");
    // const inputRef2:TextInput = useRef("");
    const inputRef = React.createRef<TextInput>();
    const inputRef2 = React.createRef<TextInput>();



    useEffect(()=>{
      renderCount.current = renderCount.current + 1;
    }) 

    const dispatch = useDispatch();
    const reservations = useSelector((state:RootState) => state.reservations.value)


    const handleClick= () =>{
        if(!reservationsNameInput) return; //empty value 

        // we need to dispatch the action
        dispatch(addReservation(reservationsNameInput));
        setreservationsNameInput("");
    }
    return(
    <View style={styles.container}>
      <TextInput
      ref={inputRef}
        style={styles.input}
        onChangeText={setreservationsNameInput}
        value={reservationsNameInput}
        placeholder="Full Name"
        numberOfLines={1}
        maxLength={15}
        onSubmitEditing={() => inputRef2.current?.focus()}
      />
      <TextInput
      ref={inputRef2}
        style={styles.input}
        maxLength={15}
        placeholder="next"
        numberOfLines={1}
      />
        <Button title={'Reserve a Seat'} onPress={handleClick}/>
        <Text>renderd {renderCount.current}</Text>
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
          

      }
});

