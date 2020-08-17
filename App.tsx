import React from 'react'
import {} from 'react-native'

//React Navigation
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

//Screens
import AddElements from './screens/AddElements'
import DisplayElemets from './screens/DisplayElements'

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='AddElements' component={AddElements} />
          <Stack.Screen name='DisplayElements' component={DisplayElemets} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App