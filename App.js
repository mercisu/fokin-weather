import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowStyle}>
      <Text style={styles.text}>Hello!!!!!!</Text>
      </View>
      <View style={styles.blueStyle}>
        <Text style={styles.text}>Merci~~</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  text:{
    color:'white',
    fontSize:50
  },
  blueStyle: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'blue'
  },
  yellowStyle: {
    flex:1,
    backgroundColor: 'yellow'
  }
});
