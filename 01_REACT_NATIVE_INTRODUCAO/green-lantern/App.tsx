import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import symbolOn from './assets/pictures/symbol-on.png'
import symbolOff from './assets/pictures/symbol-off.png' 
import { useState } from 'react';

export default function App() {
  const [isActive, setIsActive] = useState(false);

  const handleSymbol = () => {
    setIsActive((oldValue: boolean) => {
      return !oldValue
    })
  }

  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={() => {handleSymbol()}}>
        <Image source={isActive ?  symbolOn : symbolOff}/>
      </TouchableOpacity>
      <Text
        style={{
          color: "green",
          fontSize: 23,
          fontWeight: "bold"
        }}>Green Lantern</Text>
      <Text style={styles2.heroName}>Hal Jordan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const styles2 = StyleSheet.create({
  heroName: {
    fontSize: 17,
    color: "green",
    fontStyle: "italic"
  }
})
