import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen.js';
import NewMatch from './components/NewMatch.js';
import MatchInfo from './components/MatchInfo.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{title: 'Wrestling Statistics',
         headerStyle: {backgroundColor: 'skyblue'},
         headerTintColor: 'white',
         headerTitleStyle: {fontWeight: 'bold'},}}>
        <Stack.Screen name="HomeScreen"
         component={HomeScreen}
         
         
         />
        <Stack.Screen name="NewMatch" component={NewMatch} options={{title: "Create Match"}}/>
        <Stack.Screen name="MatchInfo" component={MatchInfo} options={{title: "Current Match Information"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;