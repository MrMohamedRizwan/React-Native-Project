import React from 'react';
import { View, Text, Image, StyleSheet,  Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const widthPercentage = 100; // Adjust as needed
  const heightPercentage = 75; // Adjust as needed
  const marginPercentage = 0; 
const imageWidth = (widthPercentage / 100) * screenWidth;
const imageHeight = (heightPercentage / 100) * screenHeight;
const margin = (marginPercentage / 100) * screenWidth;
const Ima8 = () => {
    return (
      <View style={styles.container}>
        {/* <Text>Hello World!</Text> */}
        <Image
          source={require('../Images/Pg-8.jpg')} // Local image
          style={{
            width: imageWidth,
            height: imageHeight,
            margin: margin,
          }}
        />
      </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 20, // Adjust the width as needed
      height: 200, // Adjust the height as needed
      margin: 20, // Add margin as needed
    },
  });
  
  export default Ima8