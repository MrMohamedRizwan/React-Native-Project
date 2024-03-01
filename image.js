import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Ima from './Js files/Pg-1';
import Ima2 from './Js files/Pg-2';
import Ima3 from './Js files/Pg-3';
import Ima4 from './Js files/Pg-4';
import Ima5 from './Js files/Pg-5';
import Ima6 from './Js files/Pg-6';
import Ima7 from './Js files/Pg-7';
import Ima8 from './Js files/Pg-8';


const Main = () => {
  return (   
    <ScrollView styles={styles.container}>
      <Text  style={styles.j}>
          Surah Yaseen
        </Text>
      <Text  style={styles.centeredText}>
          Surah Yaseen
        </Text>
      <Ima/>
      <Ima2/>
      <Ima3/>
      <Ima4/>
      <Ima5/>
      <Ima6/>
      <Ima7/>
      <Ima8/>
      
      
      <Text style={styles.jj}>Application Done by Mohamed Rizwan</Text>
    </ScrollView>

);
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure that the ScrollView takes up the entire screen
  },
  j:{
    color:"white",
    fontSize: 24, // Increase font size to 24 pixels (adjust as needed)

  },
  centeredText: {
    textAlign: 'center', // Center-align text
    fontSize: 24, // Increase font size to 24 pixels (adjust as needed)
  },
  jj:{
    textAlign: 'center',
    color:'gray',
  }
});

export default Main;
