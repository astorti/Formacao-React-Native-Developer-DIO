import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, TextInput } from 'react-native';
import { helloAnotherFile } from './src/actions';

export default function App() {

  async function handlerHelloWorld() {
    Alert.alert("Type", "Handler Function ")
  }

  async function handlePress(id: number) {
    Alert.alert("Status", "Pressionado id: " + id)
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 22}}>Part One</Text>
      <Text onPress={() => Alert.alert("Type", "In line")}>InLine</Text>
      <Text onPress={handlerHelloWorld}>Handler Function</Text>
      <Text onPress={() => handlePress(4)}>Handler Function With Parameters</Text>
      <Text onPress={() => {helloAnotherFile()}}>Another File</Text>
      <Text>---------</Text>

      <Text style={{ fontSize: 22 }}>Part Two</Text>
      <Text
        onPress={() => console.log("2.Pressionado")}
        onPressIn={() => console.log("1.onPressIn acionado")}
        onPressOut={() => console.log("3.pressOut acionado")}
        onLongPress={() => console.log("longPress acionado")}
        onTextLayout={() => console.log("Texto no Layout")}
      >
        test press events
      </Text>
      <Text>---------</Text>

      <Text style={{ fontSize: 22 }}>Part Three</Text>
      <TextInput
        placeholder='Type here'
        onChange={() => console.log("onChange Acionado")}
        onChangeText={() => console.log("onChangeText Acionado")}
        onFocus={() => console.log("Usuário focou nesse componente")}
      />
      
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
});
