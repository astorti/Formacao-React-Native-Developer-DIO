import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function GallerytScreen() {
    return (
        <View style={{flex: 1, backgroundColor: "green"}}>
            <Text>Gallery works!</Text>
            <StatusBar style='auto'/>
        </View>
    )
}