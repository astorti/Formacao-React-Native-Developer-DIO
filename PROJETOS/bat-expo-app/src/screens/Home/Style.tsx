import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#333333',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        width: '95%',
        flexDirection: 'column',
        borderColor: 'yellow',
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 60,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: '#4D4D4D'
    },
    inputContainer: {
        width: '80%',
        alignItems: 'center',
        flexDirection: 'column'
    }
});

export default styles