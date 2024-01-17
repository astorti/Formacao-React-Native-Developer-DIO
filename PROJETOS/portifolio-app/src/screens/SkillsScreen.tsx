import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import SkillsComponent from '../components/SkillsComponent';
import ProfileImage from '../components/ProfileImage';

export default function Skills() {
    return (
        
            <ScrollView>
                <View style={styles.container}>
                    <ProfileImage />
                    <Text style={styles.mySkillsText}>MY SKILLS</Text>
                    <SkillsComponent languageSkill='HTML' star='⭐⭐⭐⭐'/>
                    <SkillsComponent languageSkill='CSS' star='⭐⭐⭐⭐' />
                    <SkillsComponent languageSkill='JAVASCRIPT' star='⭐⭐⭐' />
                    <SkillsComponent languageSkill='REACT' star='⭐⭐⭐' />
                    <SkillsComponent languageSkill='C#' star='⭐⭐⭐' />
                    <SkillsComponent languageSkill='TYPESCRIPT' star='⭐⭐' />
                    <SkillsComponent languageSkill='REACT NATIVE' star='⭐⭐' />
                    <SkillsComponent languageSkill='ANGULAR' star='⭐' />
                    <SkillsComponent languageSkill='JAVA' star='⭐' />
                </View>

                <StatusBar style='auto' />
            </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#103043',
    },
    mySkillsText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 20
    }
})