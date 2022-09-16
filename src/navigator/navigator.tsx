import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';


const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}

    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}