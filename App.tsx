

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import {store} from './src/store/store'
import Reservations from './src/components/Reservations';
import Customers from './src/components/Customers';

const App = () => {


  return (
    <Provider store = {store}>
      <StatusBar bar-style="dark-content"/>
      <SafeAreaView>
        <ScrollView horizontal={false}>
            <Text style={{fontSize:20,padding:20}}>Reservations:</Text>
          <Reservations/>
          </ScrollView>
          <ScrollView horizontal={true}>
          <Customers/>
          </ScrollView>

      </SafeAreaView>

    </Provider>

  );
}
export default App;


const styles = StyleSheet.create({
  container: {
    flex:1,
    marginHorizontal:30,
    marginTop:40
  },
  text:{
    fontSize:18.
  }
});
