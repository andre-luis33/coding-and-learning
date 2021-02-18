import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './Screens/Home'
import Dax from './Screens/Dax'

export default function Routes() {
  const { Screen, Navigator} = createStackNavigator()


  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false,
      }}>
        <Screen name='home' component={Home}/>
        <Screen name='dax' component={Dax}/>
      </Navigator>
    </NavigationContainer>
  )
}