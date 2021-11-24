import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import CustomerCard from './CustomerCard';

const Customers = () => {

    const customers = useSelector((state:RootState) => state.customer.value);
    

    return(
    <View style={styles.container}>        
        <View style={styles.names}>
        {customers.map(customer =>{
            return <CustomerCard  id={customer.id} 
            name={customer.name} food={customer.food} />
        })}
        </View>
    </View>
    );
};
export default Customers;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',

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
          marginBottom:100
      }
});

