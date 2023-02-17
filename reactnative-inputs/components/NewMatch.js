import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Checkbox from 'expo-checkbox';

export default function NewMatch( { navigation } ) {
    const [isNatQualH, setNatQualH] = useState(false);
    const [isAllAmerH, setAllAmerH] = useState(false);
    const [isNatQualA, setNatQualA] = useState(false);
    const [isAllAmerA, setAllAmerA] = useState(false);

    return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled'>
      <Text style={styles.titleText}>Our Wrestler</Text>
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
        <Checkbox style={{marginLeft: 25}} value={isNatQualH} onValueChange={setNatQualH}/> 
        </View>
        <View style={styles.checkInput}>
        <Text>All American</Text>
        <Checkbox style={{marginLeft: 25}} value={isAllAmerH} onValueChange={setAllAmerH}/>
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
      <Button title="Submit" onPress={() => navigation.navigate('MatchInfo')}/>
    </ScrollView>
    )
  }

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
    }
  });