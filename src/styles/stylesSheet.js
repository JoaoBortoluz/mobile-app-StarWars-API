import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333',
        
    },
    containerImage: {
        marginTop:10,
        backgroundColor: '#333',
        width: "100%",
        height: 150,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
    },

    containerViewImage: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    imageStyle: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
        position: "absolute",
    },

    textStyle: {
        margin: 20,
        fontSize: 15,
        color: "#ffffff",
        fontWeight: "bold",
    },

    containerButton: {
        backgroundColor: '#4a6983',
        borderColor: 'gray',
		borderRadius: 10,
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
        margin: 10,
    },

});

export default styles;