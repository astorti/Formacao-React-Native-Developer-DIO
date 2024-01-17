import React from "react";
import { View, Image, Text, StyleSheet, Linking } from "react-native";

interface Props { 
    title: string;
    image: any;
    url?: string
}

export default function LinkComponent({title, image, url}: Props) {
    return (
        <View style={styles.linkContainer}>
                <Image style={{width: 20, height: 20}} source={image}/>
                {url ? 
                    <Text
                        onPress={() => Linking.openURL(url)}
                        style={styles.link}
                    >
                        {title}
                    </Text>
                :
                    <Text
                        style={styles.link}
                    >
                        {title}
                    </Text>
            }
            </View>
    )
}

const styles = StyleSheet.create({
    linkContainer: {
        flexDirection: 'row',
        marginBottom: 10
    },link: {
        color: '#0acdf4',
        fontSize: 20,
        marginLeft: 10
    }
})