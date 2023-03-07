import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MatchInfo = ({ route }) => {
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.mainSection}>
            <Text style={styles.titleText}>
              Match Information
            </Text>
            <Text style={styles.textStyle}>
              Values passed from NewMatch.js: 
                {route.params.firstNameH}, 
                {route.params.lastNameH}, 
                {route.params.teamH}, 
                {route.params.weightH}, 
                {route.params.isNatQualH}y, 
                {route.params.isAllAmerH}, 
                {route.params.isNatQualA},
                {route.params.isAllAmerA},
            </Text>
          </View>
        </SafeAreaView>
    );
  };

  export default MatchInfo;

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
  },
  textStyle: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
  },
});