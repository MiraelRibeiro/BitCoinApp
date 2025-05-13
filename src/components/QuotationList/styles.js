import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    filters: {
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 15,
        justifyContent: 'space-evenly',
    },
    buttonQuerry: {
        width: 50,
        height: 30,
        backgroundColor: '#f50b41',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    textButtonQuerry: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
});

export default styles;