import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TextInput,
  ScrollView,
  StatusBar, DatePickerIOS,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Checkbox from 'expo-checkbox';
// import * as ScreenOrientation from 'expo-screen-orientation';

const NewMatch = ({ navigation }) => {

//   ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

  const [firstNameH, setFirstNameH] = useState('home first name');
  const [firstNameA, setFirstNameA] = useState('away first name');
  const [lastNameH, setLastNameH] = useState('home last name');
  const [lastNameA, setLastNameA] = useState('away last name');

  const [eventName, setEventName] = useState('event name');

  const [teamH, setTeamH] = useState('home team');
  const [teamA, setTeamA] = useState('away team');

  const [weight, setWeight] = useState([
    { label: '125', value: '125' },
    { label: '133', value: '133' },
    { label: '141', value: '141' },
    { label: '149', value: '149' },
    { label: '157', value: '157' },
    { label: '165', value: '165' },
    { label: '174', value: '174' },
    { label: '184', value: '184' },
    { label: '197', value: '197' },
    { label: 'HWT', value: 'HWT' },
  ]);

  const [match, setMatch] = useState([
    { label: 'Varsity', value: 'Varsity' },
    { label: 'JV', value: 'JV' },
  ]);

  const [eventMenu, setEvent] = useState([
    { label: 'Tournament', value: 'Tournament' },
    { label: 'Dual', value: 'Dual' },
    { label: 'Exhibition', value: 'Exhibition'},
  ]);

  const [chosenDate, setChosenDate] = useState(new Date());

  const [isNatQualH, setNatQualH] = useState(false);
  const [isAllAmerH, setAllAmerH] = useState(false);
  const [isNatQualA, setNatQualA] = useState(false);
  const [isAllAmerA, setAllAmerA] = useState(false);

  //dropdowns
  const [openWeight, setOpenWeight] = useState(false);
  const [weightValue, setWeightValue] = useState(null);

  const [openMatch, setOpenMatch] = useState(false);
  const [matchTypeValue, setMatchTypeValue] = useState(null);

  const [openEvent, setOpenEvent] = useState(false);
  const [eventTypeValue, setEventTypeValue] = useState(null);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <View style={styles.mainSection}>
        <View style={styles.dropdownSection}>
        <DropDownPicker
          open={openWeight}
          value={weightValue}
          items={weight}
          setOpen={setOpenWeight}
          setValue={setWeightValue}
          setItems={setWeight}
          zIndex={5000}
          zIndexInverse={1000}
          dropDownDirection="AUTO"
          placeholder="Select Weight Class"
        /></View>

        <Text style={styles.titleText}>Home Wrestler</Text>

        <TextInput
          onChangeText={(firstNameH) => setFirstNameH(firstNameH)}
          placeholder={'First Name'}
          style={styles.input}
          placeholderTextColor="black"
          textAlign="center"
        />

        <TextInput
          onChangeText={(lastNameH) => setLastNameH(lastNameH)}
          placeholder={'Last Name'}
          style={styles.input}
          placeholderTextColor="black"
          textAlign="center"
        />

        <TextInput
          onChangeText={(teamH) => setTeamH(teamH)}
          placeholder={'Team'}
          style={styles.input}
          placeholderTextColor="black"
          textAlign="center"
        />
        <View style={styles.checkboxContainer}>
          <Text>National Qualifier?</Text>
          <Checkbox style={{marginLeft: 25}} value={isNatQualH} onValueChange={(isNatQualH) => setNatQualH(isNatQualH)} />
          <Text>All American?</Text>
          <Checkbox style={{marginLeft: 25}} value={isAllAmerH} onValueChange={(isAllAmerH) => setAllAmerH(isAllAmerH)} />
        </View>
        <Text style={styles.titleText}>Opponent Wrestler</Text>

        <TextInput
          onChangeText={(firstNameA) => setFirstNameA(firstNameA)}
          placeholder={'First Name'}
          style={styles.input}
          placeholderTextColor="black"
          textAlign="center"
        />

        <TextInput
          onChangeText={(lastNameA) => setLastNameA(lastNameA)}
          placeholder={'Last Name'}
          style={styles.input}
          placeholderTextColor="black"
          textAlign="center"
        />

        <TextInput
          onChangeText={(teamA) => setTeamA(teamA)}
          placeholder={'Team'}
          style={styles.input}
          placeholderTextColor="black"
          textAlign="center"
        />

        <View style={styles.checkboxContainer}>
          <Text>National Qualifier?</Text>
            <Checkbox style={{marginLeft: 25}} value={isNatQualA} onValueChange={(isNatQualA) => setNatQualA(isNatQualA)} />
            <Text>All American?</Text>
            <Checkbox style={{marginLeft: 25}} value={isAllAmerA} onValueChange={(isAllAmerA) => setAllAmerA(isAllAmerA)} />
        </View>

        <View style={{padding: 20}}>
        <TextInput
          onChangeText={(eventName) => setEventName(eventName)}
          placeholder={'Event Name'}
          style={styles.input}
          placeholderTextColor="black"
          textAlign="center"
        />
        </View>
        <View style={styles.dropdownSection}>
        <DropDownPicker
          open={openEvent}
          value={eventTypeValue}
          items={eventMenu}
          setOpen={setOpenEvent}
          setValue={setEventTypeValue}
          setItems={setEvent} 
          zIndex={4000}
          zIndexInverse={2000}
          dropDownDirection="AUTO"
          placeholder="Event Type"
        />
        </View>
        <View style={styles.dropdownSection}>
        <DropDownPicker
          open={openMatch}
          value={matchTypeValue}
          items={match}
          setOpen={setOpenMatch}
          setValue={setMatchTypeValue}
          setItems={setMatch} 
          zIndex={5000}
          zIndexInverse={3000}
          dropDownDirection="TOP"
          placeholder="Match Type"
        />
        </View>
        
        <Button
          title="Submit"
          onPress={() =>
            navigation.navigate('MatchInfo', {
                weight: weightValue,
                firstNameH: firstNameH,
                lastNameH: lastNameH,
                teamH: teamH,
                firstNameA: firstNameA,
                lastNameA: lastNameA,
                teamA: teamA,
                eventName: eventName,
                eventType: eventTypeValue,
                matchType: matchTypeValue,
                isNatQualH: isNatQualH,
                isAllAmerH: isAllAmerH,
                isNatQualA: isNatQualA,
                isAllAmerA: isAllAmerA,
            })
          }
        />
      </View>
    </ScrollView>
  );
};

export default NewMatch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },

  mainSection: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  titleText: {
    padding: 20,
    fontFamily: 'Arial', 
    font: 'Arial Black',
    fontWeight: 'bold',
    fontSize: 30,
  },

  input: {
    width: 125,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontColor: 'black',
  },

  dropdownSection: {
    width: 140,
    height: 40,
    margin: 12,
    zIndex: 1,
  },

  checkboxContainer: {

    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
