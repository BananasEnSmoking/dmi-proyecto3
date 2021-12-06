import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import i18n from './Localization/i18n';

export default function App() {
  const Stack = createNativeStackNavigator(); 

  return (
    <NavigationContainer>
      <StatusBar/>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShow: true, headerTitle: i18n.t('Titles').login }}>
          {( props ) => <Login {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Signup" options={{ headerShow: true, headerTitle: i18n.t('Titles').signup }}>
          {( props ) => <Signup {...props} /> }
        </Stack.Screen>
        <Stack.Screen name="Home" options={{ headerShow: false, headerTitle: i18n.t('Titles').home }}>
          { ( props ) => <Home {...props} /> }
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
