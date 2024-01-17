import { StatusBar } from 'expo-status-bar';
import { useReducer, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const listener = (state: any, action: any) => {
  switch (action.type) {
    case 'add-new-task':
      return {
        tasks:[...state.tasks, {name: action.inputValue, isDone: false}]
      }
  }
}

export default function App() {

  const [state, dispatch] = useReducer(listener, {tasks:[]})
  const [inputValue, setInputValue] = useState('')

  const handleTask = () => {
    dispatch({type: "add-new-task", inputValue})
  }

  return (
    <View style={styles.container}>
      <View style={styles.inline}>
        <TextInput
          style={styles.enter}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        ></TextInput>
        <Button title='ADICIONAR TAREFA' onPress={handleTask}/>
      </View>

      {state?.tasks.map((tasks: any) => <Text style={styles.tasks}>{tasks.name}</Text>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4939BA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inline:{
    width: "50%",
    flexDirection:'row',
    justifyContent: 'center'
  },
  enter: {
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#5450D6',
    width:'80%',
    color:'white'  
  },
  tasks: {
    marginTop: 5,
    fontSize: 20
  }
});
