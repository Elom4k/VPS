import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Text, View, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import HomeScreen from './screens/homescreen';
import Settings from './screens/settings';
import Login from './screens/login';
import VoiceSettings from './screens/voicesettings';
import Registration from './screens/register';
import Profile from './screens/profile';
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';

const stack = createNativeStackNavigator();
export default function App() {

  return ( 
    <Profile>
    <NavigationContainer>
      <stack.Navigator screenOptions={{header: () => null}}>
        <stack.Screen name="Register" component={Registration} />
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Settings" component={Settings} />
        <stack.Screen name="VoiceSettings" component={VoiceSettings} />
        <stack.Screen name="Profile" component={Profile} />
      </stack.Navigator>
    </NavigationContainer> 
    </Profile>
  );
}

