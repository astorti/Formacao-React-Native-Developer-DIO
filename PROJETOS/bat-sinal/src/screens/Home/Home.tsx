import React from "react";
import { View, Image, Text, Pressable } from "react-native"
import { StatusBar } from 'expo-status-bar';
import styles from '../Home/HomeStyle'
import BatSinal from '../../../assets/bat-logo.png'

export default function Home() {

    return (
        <View style={styles.appContainer}>
            <View>
                <Image
                    source={BatSinal}
                    style={{
                        resizeMode: 'contain',
                        height: 150,
                        alignSelf: 'center',
                    }} />
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

