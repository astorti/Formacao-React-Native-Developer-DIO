import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useRef, useReducer } from 'react';
import Estado from './components/Estado';

const ActionsTypes = {
  RESET: "RESET",
  WRITE: "WRITE"
}
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ActionsTypes.RESET:
      state.textInputRef.current.focus()
      state.textInputRef.current.setNativeProps({
        text: ""
      })
      return state;
    case ActionsTypes.WRITE:
        state.textInputRef.current.setNativeProps({
          text: "Texto"
        })
      return state;
    default:
      break;
  }
}
export default function App() {

  const initialState = {
    textInputRef: useRef<TextInput>(null)
  }

  const [state, dispatch] = useReducer(reducer, initialState);


  const resetButton = () => {
    dispatch({type: ActionsTypes.RESET})
  }
  return (
    <View style={styles.container}>
      <Estado />
      <TextInput
        ref={state.textInputRef}
        style={{
          width: 300,
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          marginTop: 20,
          padding: 10,
        }}>
      </TextInput>
      <Button title='Reset' onPress={resetButton} />
      <Button title='Escrever' onPress={() => dispatch({
        type: ActionsTypes.WRITE
      })}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
