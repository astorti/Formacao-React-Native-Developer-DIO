import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, TextInput, Button, ScrollView, Switch, Image } from 'react-native';
import React, { useState } from 'react';
import imgBat from './assets/bat-logo.png'

export default function App() {

  const [usuario, setUsuario] = useState('')
  const [ligado, setLigado] = useState(true)

  function handleSwitch() {
    setLigado(!ligado)
  }

  return (
    <ScrollView>
      <View style={[styles.container, styles.border, {backgroundColor: 'orangered'}]}>
        <View
          onTouchStart={(event) => {
            Alert.alert("CLIQUE", "Clique iniciado")
          }}
          onTouchEnd={(event) => {
            Alert.alert("CLIQUE", "Clique finalizado")
          }}
        >
          <Text style={styles.texto}>CLIQUE AQUI</Text>
        </View>
        <Text 
          style={[styles.texto, styles.border]}
          selectable={true}
        >Selecionar Texto</Text>
        
        <Text
          style={styles.texto}
          onPress={() => { alert("Pressionado") }}
          onLongPress={() => {alert("Pressionamento longo")}}
        >
          <Text>Olá</Text>
          <Text>Mundo</Text>
        </Text>

        <TextInput
          style={styles.input}
          onChange={(text) => setUsuario(text.nativeEvent.text)}
          keyboardType='phone-pad'
          placeholder='Digite seu número'
          value={usuario}
        />
        <Button title='click aqui' onPress={() => Alert.alert('valor atual', usuario)} />
        
        <Image
          source={imgBat}
          style={{
            resizeMode: 'contain',
            height: 180,
            alignSelf: 'center',
            display: ligado ? 'flex' : "none"
          }}/>
        <Switch value={ligado} onValueChange={handleSwitch}/>
        
        <StatusBar style="light" />
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'orange',
    color: 'white',
    padding: 15,
    borderRadius: 5,
    marginBottom: 100
  },
  border: {
    borderColor: 'yellow',
    borderWidth: 5
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    padding: 10,
    width: 300,
    color: 'orangered',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 5
  }
});
