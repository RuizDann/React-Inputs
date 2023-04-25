import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, SafeAreaView, Button, TextInput, ScrollView, Alert, Share } from 'react-native';
import { DataTable } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

const MatchInfo = ({ navigation, route }) => {
  
  // function to share the csv file
  const shareMatch = async () => {
  // get the match info from the route params
  const weight = route.params.weight;
  const firstNameH = route.params.firstNameH;
  const lastNameH = route.params.lastNameH;
  const teamH = route.params.teamH;
  const isNatQualH = route.params.isNatQualH;
  const isAllAmerH = route.params.isAllAmerH;
  const firstNameA = route.params.firstNameA;
  const lastNameA = route.params.lastNameA;
  const teamA = route.params.teamA;
  const isNatQualA = route.params.isNatQualA;
  const isAllAmerA = route.params.isAllAmerA;

  // create the csv string
  const csvString = `${weight},${firstNameH},${lastNameH},${teamH},${isNatQualH},${isAllAmerH},${firstNameA},${lastNameA},${teamA},${isNatQualA},${isAllAmerA}\n`;
  const title = `${firstNameH}${lastNameH}vs${firstNameA}${lastNameA}`;

  // write the csv string to a file in the device's file system
  const fileUri = FileSystem.documentDirectory + title + '.csv';
  await FileSystem.writeAsStringAsync(fileUri, csvString, {
    encoding: FileSystem.EncodingType.UTF8,
  });

  // share the file
  try {
    await Sharing.shareAsync(fileUri);
  } catch (error) {
    alert(error.message);
  }

  // navigate back to the home screen after sharing
  // navigation.navigate('HomeScreen');
}

  return (
    //display the match info with a save to file button
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 10 }}>
      <DataTable style={styles.container} >
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title style={{ justifyContent: 'center', alignSelf: 'center' }}>Weight Class: {route.params.weight}</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row style={styles.tableData}>
          <DataTable.Cell style={{ justifyContent: 'center', alignSelf: 'center' }}>{route.params.firstNameH} {route.params.lastNameH}</DataTable.Cell>
          <DataTable.Cell style={{ justifyContent: 'center', alignSelf: 'center' }}>{route.params.teamH}</DataTable.Cell>
          <DataTable.Cell style={{ justifyContent: 'center', alignSelf: 'center' }}>{route.params.isNatQualH}</DataTable.Cell>
          <DataTable.Cell style={{ justifyContent: 'center', alignSelf: 'center' }}>{route.params.isAllAmerH}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row style={styles.tableData}>
          <DataTable.Cell style={{ justifyContent: 'center', alignSelf: 'center' }}>{route.params.firstNameA} {route.params.lastNameA}</DataTable.Cell>
          <DataTable.Cell style={{ justifyContent: 'center', alignSelf: 'center' }}>{route.params.teamA}</DataTable.Cell>
          <DataTable.Cell style={{ justifyContent: 'center', alignSelf: 'center' }}>{route.params.isNatQualA}</DataTable.Cell>
          <DataTable.Cell style={{ justifyContent: 'center', alignSelf: 'center' }}>{route.params.isAllAmerA}</DataTable.Cell>
        </DataTable.Row>
          <TouchableOpacity style={styles.button} onPress={shareMatch}>
            <Text>Share Match</Text>
          </TouchableOpacity>
          
        </DataTable>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
          <Text>Go Home</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
    );
};

  export default MatchInfo;

  const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 20,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    flex: null,
  },

  tableHeader: {
    height: 50,
    backgroundColor: '#537791',
    alignSelf: 'stretch',
  },

  tableData: {
    height: 50,
    backgroundColor: 'lightgray',
    alignSelf: 'stretch',
  },

  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
  }

});