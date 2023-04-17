import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.mainSection}>
      <Text>Home Screen</Text>
      <Button title="Create New Match" onPress={() => navigation.navigate('NewMatch')}/>
    </View>
  );
}a

const styles = StyleSheet.create({
  container: {
    height: '15%',
    backgroundColor: 'skyblue',
    alignItems: "center",
    justifyContent: "center",

  },
  mainSection: {
    height: '80%',
    alignItems: "center", 
    justifyContent: "center"
  },
  titleText: {
    alignItems: "center",
    fontFamily: "Arial",
    font: "Arial Black",
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
  }
});