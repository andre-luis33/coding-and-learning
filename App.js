import React from 'react';
import { StyleSheet, Text, View,  TouchableOpacity } from 'react-native';
// import {} from 'reac'

export default function App() {
   return (
      <View style={styles.container}>
         <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>test</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>test</Text>
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
      // display: 'flex',
      // height: 300
   },
   button: {
      width: 300,
      height: 100,
      borderRadius: 15,
      backgroundColor: '#000',
      margin: 20,
      justifyContent: 'center',
      alignItems: 'center'
   },
   text: {
      color: '#fff'
   }
});
