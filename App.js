import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Ima from './Js files/Pg-1';
import Main from './image';
 

const App = () => {
  return (   
    <>
      <View style={styles.container}>
     
        <Main/>
      </View>
    </>


  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  j:{
    color:"white",
    fontSize: 24, // Increase font size to 24 pixels (adjust as needed)

  },
  centeredText: {
    textAlign: 'center', // Center-align text
    fontSize: 24, // Increase font size to 24 pixels (adjust as needed)
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});


export default App;
