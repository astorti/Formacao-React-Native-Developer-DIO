import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function CaixaRed(){
  return <View 
          style={{
            height:100, 
            width:100, 
            backgroundColor: 'red',
            flexShrink: 1,
            }}>
      </View>
}

function CaixaBlue(){
  return <View 
          style={{
            height:100, 
            width:100, 
            backgroundColor:'blue',
            alignSelf: 'flex-start',
            flexBasis: 150
            }}>
      </View>
}

function CaixaGreen(){
  return <View 
          style={{
            height:100, 
            width:100, 
            borderWidth:5,
            borderColor:'black',
            backgroundColor: 'green',
            flexGrow: 1
            }}>
      </View>
}

export default function App() {
  return (
    <View style={styles.container}>
      <CaixaRed></CaixaRed>
      <CaixaBlue></CaixaBlue>
      <CaixaGreen></CaixaGreen>
      <CaixaRed></CaixaRed>
      <CaixaBlue></CaixaBlue>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    alignContent: 'center',
    flexDirection:"column",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:5,
    borderColor:'purple',
    backgroundColor: '#fff',
  },
});
