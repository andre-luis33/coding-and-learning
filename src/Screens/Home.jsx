import React, { useState } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
    const navigation = useNavigation()

    function handleToDax() {
      navigation.navigate('dax')
    }

   return (
      <View style={styles.container}>
         <RectButton onPress={handleToDax} style={styles.button}>
            <Text style={styles.text}>test</Text>
         </RectButton>
         <RectButton style={styles.button}>
            <Text style={styles.text}>test</Text>
         </RectButton>
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
      backgroundColor: '#0b0',
      margin: 20,
      justifyContent: 'center',
      alignItems: 'center'
   },
   text: {
      color: '#fff'
   }
});
