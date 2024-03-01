import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './component/HomeScreen';
import ContactDetails from './component/ContactDetails';

const Stack = createNativeStackNavigator();

 function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ContactDetails" component={ContactDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;