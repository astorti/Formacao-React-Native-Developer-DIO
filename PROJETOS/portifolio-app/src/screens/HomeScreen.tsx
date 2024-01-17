import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Linking } from 'react-native';
import LinkComponent from '../components/LinkComponent';
import gitImage from '../../assets/github.png'
import linkedInImage from '../../assets/linkedIn.png'
import ProfileImage from '../components/ProfileImage';

export default function Home({ navigation }: any) {

    const goToSkillsScreen = () => {
        navigation.navigate("skills")
    }

    return (
        <View style={styles.container}>
            <ProfileImage />
            <Text style={styles.devName}>ANDRÉ STORTI</Text>
            
            <LinkComponent title='Github' image={gitImage} url="https://github.com/astorti"/>
            <LinkComponent title='LinkedIn' image={linkedInImage} />

            <Pressable style={styles.skillButton} onPress={goToSkillsScreen}>
                <Text style={styles.buttonText}>SKILLS</Text>
            </Pressable>
            
            <StatusBar style='auto'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#103043'
    },
    devName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFF',
        marginBottom: 50
    },
    skillButton: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#000',
        padding: 10,
        width: 150,
        marginTop: 50
    },
    buttonText: {
        color: '#103043',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    }
})
