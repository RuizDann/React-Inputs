import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, ScrollView, TextInput, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ScreenOrientation from 'expo-screen-orientation';
import Svg, { Circle, Rect, AreaChart, Grid, Line, PolyLine } from 'react-native-svg';
import { SelectList } from 'react-native-dropdown-select-list';
import DropDownPicker from 'react-native-dropdown-picker';
import Checkbox from 'expo-checkbox';
import Stopwatch from './Stopwatch';

export default function EventPage({ route, navigation, props }) {
  
    const [periodH, setPeriodH] = React.useState('1');
    const [otH, setOtH] = React.useState(false);
    const [currentPos, setCurrentPos] = React.useState([]);
    const [positions, setPositions] = React.useState([
        {label: "Neutral", value: "Neutral"},
        {label: "Top", value: "Top"},
        {label: "Bottom", value: "Bottom"}
      ]);

    const [positionsNeutral, setPositionsNeutral] = React.useState([
      {label: "Single Leg", value: "Single Leg"},
      {label: "Double Leg", value: "Double Leg"},
      {label: "Hi-C", value: "Hi-C"},
      {label: "Scramble", value: "Scramble"},
      {label: "Throw", value: "Throw"},
      {label: "Front Headlock", value: "Front Headlock"},
      {label: "Defended Shot", value: "Defended Shot"}
    ]);

    const [positionsTop, setPositionsTop] = React.useState([
      {label: "Tilt", value: "Tilt"}, 
      {label: "Half", value: "Half"},
      {label: "Arm Bar", value: "Arm Bar"},
      {label: "Cradle", value: "Cradle"},
      {label: "Leg Ride", value: "Leg Ride"},
      {label: "Takedown to Back", value: "Takedown to Back"}
    ]);

    const [positionsBottom, setPositionsBottom] = React.useState([
      {label: "Stand Up", value: "Stand Up"}, 
      {label: "Sit Out ", value: "Sit Out"},
      {label: "Switch", value: "Switch"},
      {label: "Tripod", value: "Tripod"},
      {label: "Roll", value: "Roll"}
    ]);

    const [offAction, setOffAction] = React.useState([
      {label: "Takedown", value: "Takedown"}, 
      {label: "Escape", value: "Escape"}, 
      {label: "Reversal", value: "Reversal"}, 
      {label: "Nearfall", value: "Nearfall"},
      {label: "Fall", value: "Fall"},  
      {label: "Caution", value: "Caution"}, 
    ]);
    const [currentRes, setCurrentRes] = React.useState([
      {label: "Success", value: "Success"},
      {label: "Fail", value: "Fail"}
    ]);
    const [scoreType, setScoreType] = React.useState([
      {label: "F", value: "F"},
      {label: "A", value: "A"}
    ]);

    const [selectedPos, setSelectedPos] = React.useState("");
    const [selectedOfAction, setSelectedOfAction] = React.useState("");
  

    const [finalTime, setFinalTime] = React.useState(0);
    function handleStopwatchStop(timeElapsed) {
      setFinalTime(timeElapsed);
    }

    //number inputs
    const [period, setPeriod] = React.useState(1);
    const [ridingTime, setRidingTime] = React.useState(0);
    const [overtime, setOvertime] = React.useState(false);

    //dropdowns
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);

    const [openAct, setOpenAct] = React.useState(false);
    const [valueAct, setValueAct] = React.useState(null);

    const [openOff, setOpenOff] = React.useState(false);
    const [valueOff, setValueOff] = React.useState(null);
    
    const [openRes, setOpenRes] = React.useState(false);
    const [valueRes, setValueRes] = React.useState(null);

    const [openScore, setOpenScore] = React.useState(false);
    const [valueScore, setValueScore] = React.useState(null);

    const handlePosition = (value) => {
      setPositionType(value);
      if(value == "Neutral")
      {
        setCurrentPos(positionsNeutral);
      }
      if(value == "Top")
      {
        setCurrentPos(positionsTop);
      }
      if(value == "Bottom")
      {
        setCurrentPos(positionsBottom);
      }

    };
  //Setup Header
  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () =>
      (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.topSection}>
          <SafeAreaView style={styles.matchInfo}>
            <View style={{marginTop: 5}}>
              <Text>Match Summary</Text>
              <Text style={{alignItems: 'center'}}>{route.params.lastNameH} VS {route.params.lastNameA}</Text>
            </View>
          </SafeAreaView>
            <View style={styles.timeTop}>
              <Stopwatch onStop={handleStopwatchStop} currentTime={finalTime}/>
            </View>

            <View style={styles.positionInput}>
              <View style={{alignItems: 'center', justifyContent: 'center', width: '80%'}}>
              <Text>Position</Text>
                <DropDownPicker
                  
                  open={open}
                  value={value}
                  items={positions}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setPositions}
                  placeholder="Position"
                  onChangeValue={(value) => {
                  handlePosition(value);
                  }}
                />
              </View>
            </View>
            
            <View style={styles.ridingTime}>
            <Text>Riding Time</Text>
              <View style={{width:"50%", justifyContent: 'center'}}>
                
                <TextInput input="numeric" 
                  keyboardType="numeric" 
                  style={{backgroundColor: 'lightblue', fontColor: 'black'}} 
                  textAlign="center"
                  value={ridingTime}
                  onChangeText={(ridingTime) => setRidingTime(ridingTime)}
                  defaultValue="0"
                />

              </View>
            </View>

            <View style={styles.period}>
              <Text>Period</Text>
              <View style={{width:"20%", justifyContent: 'center'}}>

                <TextInput input="numeric" 
                  keyboardType="numeric" 
                  style={{backgroundColor: 'lightblue', fontColor: 'black'}} 
                  textAlign="center"
                  value={period}
                  onChangeText={(period) => setPeriod(period)}
                  defaultValue="1"
                />

              </View>
            </View>

            <View style={styles.overtime}>
              <Text>Overtime</Text>
              <View style={{width:"20%", justifyContent: 'center'}}>

                <Checkbox value={overtime} onValueChange={setOvertime}/> 
              
              </View>
            </View>

          </View>
          </TouchableWithoutFeedback>
         
      ),
    })
  });


//lock orientation to landscape
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
//events list section

const [events, changeEvents]  = React.useState([]);
const [listState, setListState] = React.useState(events);
const [idx, incr] = React.useState(0);

const [positionType, setPositionType] = React.useState('');
const [offensiveAction, setOffensiveAction] = React.useState('');
const [actionType, setActionType] = React.useState('');
const [resultType, setResultType] = React.useState('');
const [currScoreType, setCurrScoreType] = React.useState('');

const [circlePositions, setCirclePositions] = React.useState([]);
const [localCircles, setLocalCircles] = React.useState(circlePositions);
const [circleColor, setCircleColor] = React.useState('red');

const addElement = () => { //adds element to list
  if(offensiveAction != '' && actionType != '' && localCircles.length%2 == 0 && localCircles.length/2 == events.length+1)//if input is not null
  {
  //create new array with new element
  var newArray = [...events , {
    id : idx,
    position: positionType, 
    offAct: offensiveAction, 
    actType: actionType, 
    result: resultType, 
    scoring: currScoreType,  
    time: finalTime, 
    numPeriod: period, 
    secRidingTime: ridingTime,
    isOvertime: overtime,
    StartX: localCircles[localCircles.length-2].x,
    StartY: localCircles[localCircles.length-2].y,
    EndX: localCircles[localCircles.length-1].x,
    EndY: localCircles[localCircles.length-1].y
      }];


  incr(idx+1); //iterates new id value of each event in list (starts as 0)
  console.log();
  console.log("finalTime:" + finalTime);
  console.log("positionType: " + positionType);
  console.log("ridingTime: " + ridingTime);
  console.log("period: " + period);
  console.log("overtime: "+ overtime);
  console.log("offensiveAction: " + offensiveAction);
  console.log("actionType: " + actionType);
  console.log("resultType: " + resultType);
  console.log("currScoreType: " + currScoreType);
  console.log("StartX: " + localCircles[localCircles.length-2].x);
  console.log("StartY: " + localCircles[localCircles.length-2].y);
  console.log("EndX: " + localCircles[localCircles.length-1].x);
  console.log("EndY: " + localCircles[localCircles.length-1].y);

  setListState(newArray); //updating states
  changeEvents(newArray);


  }
};

const deleteElement = () => {  //delete element
  if(events.length !=0 && localCircles.length%2 == 0 && localCircles.length/2 == events.length)
  {
    
    incr(idx-1); //decrease id so events maintain ascending order with no skips
    const newArray = listState.filter((item) => item.id !== events[events.length-1].id); //create new array without last element
    setListState(newArray); //updating states
    changeEvents(newArray);
    const newCircles = [...localCircles];
    newCircles.pop();
    newCircles.pop();
    setLocalCircles(newCircles);
    setCirclePositions(newCircles);
  }
};


const deleteLastCircle = () => {
    if(localCircles.length%2 !=0 || localCircles.length/2 == events.length+1){

      if(circleColor == "red"){//revert back to circle color that is being deleted
        setCircleColor("orange");
      }
      else
      {
        setCircleColor("red");
      }
    let newCircles = [...localCircles];//delete circle
    newCircles.pop();
    setLocalCircles(newCircles);
    setCirclePositions(newCircles);
    }
  }

  const handlePress = (event) => {
    if(localCircles.length == events.length*2 || localCircles.length==0 || localCircles.length == events.length*2+1 ) {
    const { locationX, locationY } = event.nativeEvent;
    const newCircle = {id:idx, x: locationX, y: locationY, color: circleColor };

    if(circleColor == "red"){//change to next circle to be placed
      setCircleColor("orange");
    }
    else
    {
      setCircleColor("red");
    }
    let newCircles = [...localCircles, newCircle];
    setLocalCircles(newCircles);
    setCirclePositions(newCircles);
    }

  };

  //function to convert list to csv file
    const convertArrayOfObjectsToCSV = (array) => {
        let result; //variable to store csv file
        const columnDelimiter = ","; //delimiter for columns
        const lineDelimiter = "\n"; //delimiter for rows
        const keys = Object.keys(events[0]); //keys for each column
        result = "";
        result += keys.join(columnDelimiter);
        result += lineDelimiter;
        array.forEach((item) => {
            let ctr = 0;
            keys.forEach((key) => {
                if (ctr > 0) result += columnDelimiter;
                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });
        return result;
    };

  return (

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.backgrounMainSection}>
  
      <View style={styles.eventsSection}> 
      
          <FlatList 
            data={listState}
            renderItem={item => (
              <View style={styles.item}>
                <Text >{item.item.offAct} {item.item.result}</Text> 
              </View>
            )}
            keyExtractor={item => item.id}
            />
      </View>


      <View style={styles.eventInput}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <View style={{width: '50%'}}>
            <DropDownPicker
            
              open={openOff}
              value={valueOff}
              items={offAction}
              setOpen={setOpenOff}
              setValue={setValueOff}
              setItems={setOffAction}
              placeholder="Offensive Action"
              onChangeValue={(value) => {
                setOffensiveAction(value)
              }}
            />
          </View>

          <View style={{width: '50%'}}>
            <DropDownPicker
            
              open={openAct}
              value={valueAct}
              items={currentPos}
              setOpen={setOpenAct}
              setValue={setValueAct}
              setItems={setCurrentPos}
              placeholder="Action Type"
              onChangeValue={(value) => {
                setActionType(value)
              }}
            />
          </View>
          <View style={{width: '100%', height: '40%'}}>
            <Text></Text>
            </View>

          <View style={{width: '50%'}}>
            <DropDownPicker
        
              open={openRes}
              value={valueRes}
              items={currentRes}
              setOpen={setOpenRes}
              setValue={setValueRes}
              setItems={setCurrentRes}
              placeholder="Result"
              onChangeValue={(value) => {
                setResultType(value)
              }}
            />
          </View>

          <View style={{width: '50%'}}>
            <DropDownPicker
        
              open={openScore}
              value={valueScore}
              items={scoreType}
              setOpen={setOpenScore}
              setValue={setValueScore}
              setItems={setScoreType}
              placeholder="Scoring"
              onChangeValue={(value) => {
                setCurrScoreType(value)
              }}
            />
          </View>
          <Button title="update" onPress={addElement}/>
          <Button title="Delete last Event" onPress={deleteElement} />
          
      </View>

        <View>

          </View>
         
      </View>
      

      <View style={styles.timeInput}>

      </View>

      
      <View style={styles.chartSection}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Svg width="200" height="200"  onPress={handlePress}>
          <Rect x = '0' y = '0' width='200' height='200' fill='blue' />
          <Circle cx="100" cy="100" r="100" fill="lightgrey" />
          <Circle cx='100' cy='100' r='50' fill='white' stroke="blue" />
          <Line x1="100" y1="0" x2="100" y2="200" stroke="blue" strokeWidth="1" />
          <Line x1='0' y1='100' x2='200' y2='100' stroke='blue' strokeWidth='1' />
          
          {localCircles.map((circle, index) => (
            <Circle key={index} cx={circle.x} cy={circle.y} r="5" fill={circle.color} stroke="black" strokewidth="1" />
          ))}
          </Svg>
          <Button title="Delete last Event" onPress={deleteLastCircle} />
        </View>
      </View>

    </View>
    </TouchableWithoutFeedback>

    
  );
}

const styles = StyleSheet.create({
  total: {
    borderRightWidth:3,
    height: '30%',
  },
  overtime: {
    width: '13%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  period: {
    width: '13%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ridingTime: {
    width: '13%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ridingTimeCont: {
  flex: 1,
  backgroundColor: 'lightgray',
  alignItems: 'center'
  },
  positionInput: {
    textAlign: 'center',
    width: '15%',
    justifyContent: 'center',
  },
  timeTop: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  topSection: {
    flexDirection: "row",
  },

  header: {
    height: '10%',  
  },

  matchInfo: {
    backgroundColor: 'skyblue',
    height: 90,
    width: '20%',
    borderRightWidth: 3,
    alignItems: 'right',
  },
  container: {
    height: '20%',
    width: '30%',
    backgroundColor: 'skyblue',
    alignItems: "left",
  },
  backgrounMainSection: {
    flex: 1,
    backgroundColor: 'gray',
    flexDirection: 'row',
  },
  eventInput: {
    width: '30%',
    height: '100%',
    alignItems: "center", 
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3,
  },
  chartSection: {
    width: '30%',
    height: '75%',
    alignItems: "center", 
    justifyContent: 'center', 
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3,
  },
  timeInput: {
    width: '20%',
    height: '75%',
    alignItems: "center", 
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3,
  },
  titleText: {
    alignItems: "center",
    fontFamily: "Arial",
    font: "Arial Black",
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
  },
  eventsSection: {
    width: '20%',
    borderWidth: 3,
  },
  item: {
    flex: 1,
    borderBottomWidth: 2,
    alignItems: 'center',
  },
});