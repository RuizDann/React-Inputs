import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MatchInfo = ({ route }) => {

  constructor()
  {
    super();
    this.state = {
      matchData:[
        {
          'weight': route.params.weight,
        },
        {
          'firstNameH': route.params.firstNameH,
          'lastNameH': route.params.lastNameH,
          'teamH': route.params.teamH,
          'isNatQualH': route.params.isNatQualH,
          'isAllAmerH': route.params.isAllAmerH,
        },
        {
          'firstNameA': route.params.firstNameA,
          'lastNameA': route.params.lastNameA,
          'teamA': route.params.teamA,
          'isNatQualA': route.params.isNatQualA,
        }
      ]
    }
  }

  ExportToCsv() {
    var csvRows = [];
    var A = [['weight', 'firstNameH', 'lastNameH', 'teamH', 'isNatQualH', 'isAllAmerH', 'firstNameA', 'lastNameA', 'teamA', 'isNatQualA', 'isAllAmerA']];
    var B = this.state.matchData;

    for (var i = 0; i < B.length; ++i) {
      A.push([B[i].weight, B[i].firstNameH, B[i].lastNameH, B[i].teamH, B[i].isNatQualH, B[i].isAllAmerH, B[i].firstNameA, B[i].lastNameA, B[i].teamA, B[i].isNatQualA, B[i].isAllAmerA]);
  }

  for (var i = 0; i < A.length; ++i) {
    csvRows.push(A[i].join(','));
  }

  var csvString = csvRows.join("%0A");
  var a = document.createElement('a');
  a.href = 'data:attachment/csv,' + csvString;
  a.target = '_Blank';
  a.download = 'matchData.csv';
  document.body.appendChild(a);
  a.click();
}


  // const matchData = [
  //   { weight: route.params.weight, 
  //     firstNameH: route.params.firstNameH, 
  //     lastNameH: route.params.lastNameH, 
  //     teamH: route.params.teamH, 
  //     isNatQualH: route.params.isNatQualH, 
  //     isAllAmerH: route.params.isAllAmerH, 
  //     firstNameA: route.params.firstNameA, 
  //     lastNameA: route.params.lastNameA, 
  //     teamA: route.params.teamA, 
  //     isNatQualA: route.params.isNatQualA, 
  //     isAllAmerA: route.params.isAllAmerA }
  // ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 10 }}>
      <DataTable style={styles.container} >
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title style={{ justifyContent: 'center', alignSelf: 'center' }}>Weight Class: {route.params.weight}</DataTable.Title>
        </DataTable.Header>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title >First Name</DataTable.Title>
          <DataTable.Title >Last Name</DataTable.Title>
          <DataTable.Title >Team</DataTable.Title>
          <DataTable.Title >Nat Qual</DataTable.Title>
          <DataTable.Title >All Amer</DataTable.Title>
        </DataTable.Header>
        <DataTable.Header style={styles.tableData}>
          <DataTable.Title >{route.params.firstNameH}</DataTable.Title>
          <DataTable.Title >{route.params.lastNameH}</DataTable.Title>
          <DataTable.Title >{route.params.teamH}</DataTable.Title>
          <DataTable.Title >{route.params.isNatQualH}</DataTable.Title>
          <DataTable.Title >{route.params.isAllAmerH}</DataTable.Title>
        </DataTable.Header>
        <DataTable.Header style={styles.tableData}>
          <DataTable.Title >{route.params.firstNameA}</DataTable.Title>
          <DataTable.Title >{route.params.lastNameA}</DataTable.Title>
          <DataTable.Title >{route.params.teamA}</DataTable.Title>
          <DataTable.Title >{route.params.isNatQualA}</DataTable.Title>
          <DataTable.Title >{route.params.isAllAmerA}</DataTable.Title>
        </DataTable.Header>
        <DataTable.Cell style={{ justifyContent: 'center', alignSelf: 'center' }}>
          {/* button onpress save matchData to a file */}
          <Button title="Save Match Data" onPress={this.ExportToCsv} />
        </DataTable.Cell>

      </DataTable>
      </View>
    </SafeAreaView>
    );
  };

  export default MatchInfo;

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        paddingTop: 20,
        backgroundColor: 'lightgray',
        alignItems: 'center',
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

  });