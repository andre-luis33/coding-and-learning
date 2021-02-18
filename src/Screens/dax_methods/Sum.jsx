import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';

const statusBarHeight = Constants.statusBarHeight


export default function DaxSum() {

   return (
      <ScrollView style={styles.container}>
         <View style={styles.header}>
            <Text>
               DAX - SUM
            </Text>
         </View>
         <View style={styles.listContainer}>
            <View style={styles.listItem}>
               <Text style={styles.title}>
                  SUM FLOAT
               </Text>
               <Text>
                  Essa função soma valores float
               </Text>
            </View>
            <View style={styles.listItem}>
               <Text style={styles.title}>
                  SUM INT
               </Text>
               <Text>
                  Essa função soma valores int
               </Text>
            </View>
            <View style={styles.listItem}>
               <Text style={styles.title}>
                  SUM INT
               </Text>
               <Text>
                  Essa função soma valores int
               </Text>
            </View>
            <View style={styles.listItem}>
               <Text style={styles.title}>
                  SUM INT
               </Text>
               <Text>
                  Essa função soma valores int
               </Text>
            </View>
            <View style={styles.listItem}>
               <Text style={styles.title}>
                  SUM INT
               </Text>
               <Text>
                  Essa função soma valores int
               </Text>
            </View>
            <View style={styles.listItem}>
               <Text style={styles.title}>
                  SUM INT
               </Text>
               <Text>
                  Essa função soma valores int
               </Text>
            </View>
            <View style={styles.listItem}>
               <Text style={styles.title}>
                  SUM INT
               </Text>
               <Text>
                  Essa função soma valores int
               </Text>
            </View>
            <View style={styles.listItem}>
               <Text style={styles.title}>
                  SUM INT
               </Text>
               <Text>
                  Essa função soma valores int
               </Text>
            </View>
         </View>
      </ScrollView>
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
