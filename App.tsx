import React from 'react'
import {} from 'react-native'

//Redux Store
import {Provider} from 'react-redux'
import configureStore from './src/store'

const store = configureStore()

//React Navigation
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

//Screens
import AddElements from './src/screens/AddElements'
import DisplayElemets from './src/screens/DisplayElements'

const App = () => {
  return (
    <Provider store={store}>

      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='AddElements' component={AddElements} options=
            {{
              title: 'Add Elements',
              headerStyle: {
                backgroundColor: '#f4511e'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
            }} 
            />
            <Stack.Screen name='DisplayElements' component={DisplayElemets} options=
            {{
              title: 'Display Elements',
              headerStyle: {
                backgroundColor: '#f4511e'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
            }} 
            />
          </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  )
}

export default App