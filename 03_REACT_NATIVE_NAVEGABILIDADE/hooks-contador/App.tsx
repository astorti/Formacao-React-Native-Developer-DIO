import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useReducer } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

const reducer = (state: {counter: number}, action: {type: string}) => {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1
      }
    case 'decrement':
      if (state.counter > 0) {
        return {
          counter: state.counter - 1
        }  
      }
    default:
      return state
  }
}

export default function App() {

  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, {counter: 0})

  useEffect(() => {
    if (count === 0 || state.counter === 0) {
      Alert.alert("Carrinho", "Seu carrinho está vazio")
    } else {
      console.log("Ainda tem itens no carrinho")
    }
  }, [count, state.counter])

  const incrementCount = () => {
    setCount((prevState) => prevState + 1)
  }

  const decrementCount = () => {
    if (count > 0) {
      setCount((prevState) => prevState - 1)
    }
  }

  const incrementCountReducer = () => {
    dispatch({type: 'increment'})
  }

  const decrementCountReducer = () => {
    dispatch({type: 'decrement'})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useState, useEffect</Text>
      <Text style={styles.big}>{count}</Text>

      <View style={styles.inline}>
        <Button title='REMOVER' onPress={decrementCount}></Button>
        <Button title='ADICIONAR' onPress={incrementCount}></Button>
      </View>

      <Text>---------------------------------------------------------------------</Text>
      <Text style={styles.title}>useReducer</Text>
      <Text style={styles.big}>{state.counter}</Text>

      <View style={styles.inline}>
        <Button title='REMOVER' onPress={decrementCountReducer}></Button>
        <Button title='ADICIONAR' onPress={incrementCountReducer}></Button>
      </View>
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
  },
  big: {
    fontSize: 50,
    marginBottom: 10
  },
  inline: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 30,
    marginBottom: 10
  },
});
