import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function MatchInfo({ navigation }) {
    return (
        <View style={styles.mainSection}>
        <Text>Match Information</Text>
        <Button title="Create New Match" onPress={() => navigation.navigate('Homescreen')}/>
        </View>
    );
    }