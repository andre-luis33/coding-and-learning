import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

export default function App() {
   return (
      <View style={styles.container}>
         <ScrollView>
            <Text style={styles.texts}>A lot of cards</Text>   
            <Text style={styles.texts}>A lot of cards</Text>    
         </ScrollView>      
         {/* <StatusBar style="auto" /> */}
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      display: 'flex',
      height: 300
   },
   texts: {
      textAlign: 'left',
      backgroundColor: 'red',
      // alignSelf: 'center'
      height: 50,
      padding: 10,
      display: 'flex',
      alignItems: 'center',
   }
});
