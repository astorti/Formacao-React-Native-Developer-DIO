import { View, Text, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function HomeScreen() {
    
    return (
        <View style={{flex: 1, backgroundColor: "blue"}}>
            <Text>Home works!</Text>
            <StatusBar style='auto'/>
        </View>
    )
}