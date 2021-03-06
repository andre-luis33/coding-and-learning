import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'

const statusBarHeight = Constants.statusBarHeight


export default function Dax() {

   const navigation = useNavigation()

   function handleClick(page) {
      navigation.navigate(page)
   }

   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.header}>
            <Text>
               Funções DAX
            </Text>
         </View>
         <View style={styles.listContainer}>
            <RectButton onPress={() => handleClick('dax-data')} style={styles.btn}>
               <Text>
                  Funções de Data
               </Text>
            </RectButton>
            <RectButton onPress={() => handleClick('dax-sum')} style={styles.btn}>
               <Text>
                  Funções de Soma
               </Text>
            </RectButton>
         </View>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: statusBarHeight,
   },
   text: {
      color: '#000'
   },
   header: {
      backgroundColor: '#ffd500',
      height: 70,
      padding: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', 
   },
   listContainer: {
      padding: 10
   },
   btn: {
      padding: 25,
      backgroundColor: '#eee',
      borderRadius: 15,
      margin: 10
   }
});
