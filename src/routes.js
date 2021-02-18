import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './Screens/Home'
import Dax from './Screens/Dax'
import DaxDate from './Screens/dax_methods/Date'
import DaxSum from './Screens/dax_methods/Sum'

export default function Routes() {
  const { Screen, Navigator} = createStackNavigator()


  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false,
      }}>
        <Screen name='home' component={Home}/>
        <Screen name='dax' component={Dax}/>
        <Screen name='dax-data' component={DaxDate}/>
        <Screen name='dax-sum' component={DaxSum}/>
      </Navigator>
    </NavigationContainer>
  )
}