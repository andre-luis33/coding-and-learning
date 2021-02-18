import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';

const statusBarHeight = Constants.statusBarHeight


export default function DaxDate() {

   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.header}>
            <Text>
               DAX - Datas
            </Text>
         </View>
         <View style={styles.listContainer}>
            <View style={styles.listItem}>
               <Text style={styles.title}>
                  DATE ADD
               </Text>
               <Text>
                  Essa função adiciona X dias a sua variavel e tals, te deixa felizão
               </Text>
            </View>
            <View style={styles.listItem}>
               <Text style={styles.title}>
                  DATE DIFF
               </Text>
               <Text>
                  Essa função retorna a diferença entre uma data e a outra, tipo, entre o dia 1 e o dia 2 tem 1 dia :P
               </Text>
            </View>
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
      justifyContent: 'center'
   },
   listContainer: {
      padding: 10
   },
   listItem: {
      padding: 20,
      borderRadius: 15,
      margin: 10,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#000'
   },
   title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 5
   }
});
