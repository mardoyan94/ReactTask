import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    emptyText: {
        color: 'black',
        fontSize: 25,
        lineHeight: 27,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 16
    },
    scrollInner: {
        padding: 16
    },
    itemContainer: {
        height: 80,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderRadius: 10,
        marginVertical: 5,
        justifyContent: 'space-around'
    },
    itemId: {
        color: 'purple',
        fontSize: 20,
        lineHeight: 22
    },
    itemTitle: {
        color: 'green',
        fontSize: 20,
        lineHeight: 22
    },
    button: {
        marginHorizontal: 16,
        height: 50,
        marginVertical: 8,
        backgroundColor: 'blue',
        borderRadius: 25,
        justifyContent: 'center',
        paddingHorizontal: 16,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    }
})