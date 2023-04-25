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
}

const styles = StyleSheet.create({
  mainSection: {
    height: '80%',
    alignItems: "center", 
    justifyContent: "center"
  }
});