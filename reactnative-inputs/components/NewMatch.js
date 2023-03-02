import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Picker } from '@react-native-picker/picker';
import { SelectList } from 'react-native-dropdown-select-list';
import Checkbox from 'expo-checkbox';
import { weightClasses } from './LorasData';

const NewMatch = ( { navigation } ) => {
    const [firstName, setFirstName] = useState('first name');
    const [lastName, setLastName] = useState('last name');
    const [team, setTeam] = useState('team');
    const [weight, setWeight] = useState('weight class');
    const [isNatQualH, setNatQualH] = useState(false);
    const [isAllAmerH, setAllAmerH] = useState(false);
    const [isNatQualA, setNatQualA] = useState(false);
    const [isAllAmerA, setAllAmerA] = useState(false);
    
    const [selected, setSelected] = React.useState("");
    const weightClasses = [
        {label: '125', value: '125'},
        {label: '133', value: '133'},
        {label: '141', value: '141'},
        {label: '149', value: '149'},
        {label: '157', value: '157'},
        {label: '165', value: '165'},
        {label: '174', value: '174'},
        {label: '184', value: '184'},
        {label: '197', value: '197'},
        {label: 'HWT', value: 'HWT'},
    ];

    return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled'>
    <Text style={styles.titleText}>Our Wrestler</Text>
    <View style={styles.mainSection}>
    
        <TextInput 
            onChangeText={(firstname) => setFirstName(firstname)}
            placeholder='First Name'
            style={styles.input}
            placeholderTextColor='black'
            textAlign='center'
        />

        <TextInput 
            onChangeText={(lastname) => setLastName(lastname)}
            placeholder='Last Name'
            style={styles.input}
            placeholderTextColor='black'
            textAlign='center'
        />

        <TextInput
            onChangeText={(team) => setTeam(team)}
            placeholder="Team"
            style={styles.input}
            placeholderTextColor="black"
            textAlign="center"
        />

        <SelectList 
        setSelected={(selected) => setSelected(selected)}
        data={weightClasses}
        save="value"
        placeholder="Weight Class"
        boxStyles={{
            width: 150, 
            height: 50, 
            backgroundColor: 'transparent', 
            borderRadius: 0, 
            borderWidth: 1, 
            borderColor: 'black', 
            margin: 10,
        }}
        />

        <View style={styles.checkInput}>
        <Text>NAT QUAL</Text>
            <Checkbox style={{marginLeft: 25}} 
                value={isNatQualH} 
                onValueChange={setNatQualH}
            /> 
        </View>
        <View style={styles.checkInput}>
            <Text>All American</Text>
            <Checkbox style={{marginLeft: 25}}
            value={isAllAmerH}
            onValueChange={setAllAmerH}
            />
        </View>
      </View>
      <Text style={styles.titleText}>Opponent</Text>
      <View style={styles.mainSection}>
        <TextInput 
            style={styles.input}
            placeholder='First Name'
            placeholderTextColor='black'
            textAlign='center'
            
        />
        <TextInput 
            style={styles.input}
            placeholder='Last Name'
            placeholderTextColor='black'
            textAlign='center'
        />
        <TextInput 
            style={styles.input}
            placeholder="Team"
            placeholderTextColor="black"
            textAlign="center"
        />
        <TextInput 
            style={styles.input}
            placeholder="Weight Class"
            placeholderTextColor="black"
            textAlign="center"
        />
        <View style={styles.checkInput}>
            <Text>NAT QUAL</Text>
        <Checkbox style={{marginLeft: 25}} value={isNatQualA} onValueChange={setNatQualA}/> 
        </View>
        <View style={styles.checkInput}>
        <Text>All American</Text>
        <Checkbox style={{marginLeft: 25}} value={isAllAmerA} onValueChange={setAllAmerA}/>
        </View>
      </View>
      <Button title="Submit" onPress={() => navigation.navigate('MatchInfo', {
            firstName: firstName,
            lastName: lastName,
            team: team,
            weight: weight,
            isNatQualH: isNatQualH,
            isAllAmerH: isAllAmerH,
            isNatQualA: isNatQualA,
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