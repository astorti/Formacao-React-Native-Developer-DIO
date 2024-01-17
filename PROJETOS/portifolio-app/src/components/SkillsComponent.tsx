import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props { 
    languageSkill: string;
    star: any;
}

export default function SkillsComponent({languageSkill, star}: Props) {

    return (
        <View style={styles.container}>
            <Text style={styles.languageNameText}>{languageSkill}</Text>
            <Text>{star}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 3,
        borderColor: '#000',
        width: 350,
        backgroundColor: '#FFF',
        padding: 10,
        marginTop: 0,
        marginBottom: 8
    },
    languageNameText: {
        flex: 1,
        fontSize: 15,
        fontWeight: 'bold'
    }
})