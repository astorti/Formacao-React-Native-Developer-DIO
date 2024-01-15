import React from "react";
import { View, Text, TextInput, Image } from "react-native"
import { StatusBar } from 'expo-status-bar';
import styles from '../Form/FormStyle'
import BatSinal from '../../../assets/bat-logo.png'

export default function Form() {

    return (
        <View style={styles.appContainer}>
            <View>
                <Image
                    source={BatSinal}
                    style={{
                        width: 90,
                        height: 45,
                        marginBottom: 20
                    }}
                />
                <Text>Nome</Text>
                <TextInput style={styles.border}></TextInput>
                <Text>Telefone</Text>
                <TextInput style={styles.border} keyboardType="phone-pad"></TextInput>
                <Text>Endereço</Text>
                <TextInput style={styles.border}></TextInput>
                <Text>Observação</Text>
                <TextInput style={styles.border2}></TextInput>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

