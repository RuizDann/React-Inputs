import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Picker } from '@react-native-picker/picker';
import { SelectList } from 'react-native-dropdown-select-list';
import Checkbox from 'expo-checkbox';
import { weightClasses } from './LorasData';

const NewMatch = ( { navigation } ) => {
    const [firstNameH, setFirstNameH] = useState('home first name');
    const [firstNameA, setFirstNameA] = useState('first name');
    const [lastNameH, setLastNameH] = useState('home last name');
    const [lastNameA, setLastNameA] = useState('last name');
    const [teamH, setTeamH] = useState('home team');
    const [teamA, setTeamA] = useState('away team');
    const [weight, setWeight] = useState('weight class');
    const [isNatQualH, setNatQualH] = useState('NO');
    const [isAllAmerH, setAllAmerH] = useState('NO');
    const [isNatQualA, setNatQualA] = useState('NO');
    const [isAllAmerA, setAllAmerA] = useState('NO');

    return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled'>
        <View style={styles.mainSection}>
            <SelectList 
                setSelected={(weight) => setWeight(weight)}
                data={weightClasses}
                save="value"
                placeholder={"Weight Class"}
                boxStyles={{
                    width: 150, 
                    height: 45, 
                    backgroundColor: 'transparent', 
                    borderRadius: 0, 
                    borderWidth: 1, 
                    borderColor: 'black', 
                    margin: 20,
                }}
            />
        </View>
        
        <Text style={styles.titleText}>Home Wrestler</Text>
        <View style={styles.mainSection}>
        <TextInput 
            onChangeText={(firstNameH) => setFirstNameH(firstNameH)}
            placeholder={'First Name'}
            style={styles.input}
            placeholderTextColor='black'
            textAlign='center'
        />

        <TextInput 
            onChangeText={(lastNameH) => setLastNameH(lastNameH)}
            placeholder={'Last Name'}
            style={styles.input}
            placeholderTextColor='black'
            textAlign='center'
        />

        <TextInput
            onChangeText={(teamH) => setTeamH(teamH)}
            placeholder={"Team"}
            style={styles.input}
            placeholderTextColor="black"
            textAlign="center"
        />

        <SelectList 
                setSelected={(isNatQualH) => setNatQualH(isNatQualH)}
                data={[{label: 'YES', value: 'YES'}, {label: 'NO', value: 'NO'}]}
                save="value"
                placeholder={'National Qualifier?'}
                boxStyles={{
                    width: 150, 
                    height: 45, 
                    backgroundColor: 'transparent', 
                    borderRadius: 0, 
                    borderWidth: 1, 
                    borderColor: 'black', 
                    margin: 20,
                }}
            />
        <SelectList 
                setSelected={(isAllAmerH) => setAllAmerH(isAllAmerH)}
                data={[{label: 'YES', value: 'YES'}, {label: 'NO', value: 'NO'}]}
                save="value"
                placeholder={'All American?'}
                boxStyles={{
                    width: 150, 
                    height: 45, 
                    backgroundColor: 'transparent', 
                    borderRadius: 0, 
                    borderWidth: 1, 
                    borderColor: 'black', 
                    margin: 20,
                }}
            />
      </View>

      <Text style={styles.titleText}>Opponent</Text>
      <View style={styles.mainSection}>
        <TextInput 
            onChangeText={(firstNameA) => setFirstNameA(firstNameA)}
            placeholder={'First Name'}
            style={styles.input}
            placeholderTextColor='black'
            textAlign='center'
        />

        <TextInput 
            onChangeText={(lastNameA) => setLastNameA(lastNameA)}
            placeholder={'Last Name'}
            style={styles.input}
            placeholderTextColor='black'
            textAlign='center'
        />

        <TextInput
            onChangeText={(teamA) => setTeamA(teamA)}
            placeholder={"Team"}
            style={styles.input}
            placeholderTextColor="black"
            textAlign="center"
        />

        <SelectList 
                setSelected={(isNatQualA) => setNatQualA(isNatQualA)}
                data={[{label: 'YES', value: 'YES'}, {label: 'NO', value: 'NO'}]}
                save="value"
                placeholder={'National Qualifier?'}
                boxStyles={{
                    width: 150, 
                    height: 45, 
                    backgroundColor: 'transparent', 
                    borderRadius: 0, 
                    borderWidth: 1, 
                    borderColor: 'black', 
                    margin: 20,
                }}
            />
        <SelectList 
                setSelected={(isAllAmerA) => setAllAmerA(isAllAmerA)}
                data={[{label: 'YES', value: 'YES'}, {label: 'NO', value: 'NO'}]}
                save="value"
                placeholder={'All American?'}
                boxStyles={{
                    width: 150, 
                    height: 45, 
                    backgroundColor: 'transparent', 
                    borderRadius: 0, 
                    borderWidth: 1, 
                    borderColor: 'black', 
                    margin: 20,
                }}
            />
      </View>

      <Button title="Submit" onPress={() => navigation.navigate('MatchInfo', {
            weight: weight,
            firstNameH: firstNameH,
            lastNameH: lastNameH,
            teamH: teamH,
            isNatQualH: isNatQualH,
            isAllAmerH: isAllAmerH,

            firstNameA: firstNameA,
            lastNameA: lastNameA,
            teamA: teamA,
            isNatQualA: isNatQualA,
            isAllAmerA: isAllAmerA,
            })
        }
    />
    </ScrollView>
    );
};

export default NewMatch;

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        alignItems: 'center',
    },

    mainSection: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center', 
        gap: '10rem',
        justifyContent: 'center',
    },

    titleText: {
        height: '8%', 
        padding: 20,
        fontFamily: 'Arial',
        font: 'Arial Black',
        fontWeight: 'bold',
        fontSize: 20,
        
    },

    input: {
        alignItems: 'stretch',
        width: 150,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontColor: 'black',
      },

    checkInput: {
        alignItems: 'stretch',
        width: 150,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontColor: 'black',
        flexDirection: 'row',
    },

    picker: {
        justifyContent: 'center',
        alignItems: 'stretch',
        flexDirection: 'column-wrap',
        width: 300,
        height: 100,
        marginVertical: 30,
        borderWidth: 1,
  },

  });