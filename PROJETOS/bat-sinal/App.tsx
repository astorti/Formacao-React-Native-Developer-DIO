import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import Home from './src/screens/Home/Home';
import { useState } from 'react';
import Form from './src/screens/Form/Form';

export default function App() {

  const [signal, setSignal] = useState(false)
  
  return (
    <View style={styles.container}>
      {signal ?
        
        <View>
          <Form /> 
          <Pressable style={styles.activateBatSignal} onPress={() => setSignal(false)}>
            <Text style={styles.buttonText}>ENVIAR</Text>
          </Pressable>
        </View> :

        <View style={styles.container}>
          <Home />
          <Pressable style={styles.activateBatSignal} onPress={() => setSignal(true)}>
            <Text style={styles.buttonText}>ATIVAR BAT SINAL</Text>
          </Pressable>
        </View>}
      
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
  activateBatSignal: {
    backgroundColor: "#000",
    borderRadius: 3,
    width: 250,
    marginBottom: 80
  },
  buttonText: {
    color: "#FFF",
    padding: 10,
    fontWeight: "bold",
    textAlign: "center"
}
});
