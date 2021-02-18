import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function Dax() {
   return (
      <View style={styles.container}>
            <Text style={styles.text}>test</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
   },
   text: {
      color: '#000'
   }
});
