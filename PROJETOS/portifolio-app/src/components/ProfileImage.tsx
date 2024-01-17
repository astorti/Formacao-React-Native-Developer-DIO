import imageUser from '../../assets/imageUser.png'
import { View, Image, StyleSheet } from 'react-native'

export default function ProfileImage() {
    return (
        <View>
            <Image style={styles.profileImg} source={imageUser}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    profileImg: {
        width: 150,
        height: 150,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 100,
        marginBottom: 30,
        marginTop: 30
    }
})