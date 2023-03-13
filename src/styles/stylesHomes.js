import React from "react";
import { StyleSheet } from "react-native";


const stylesHome = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#191e22",
    },
    header: {
        height: '8%',
        width: '100%',  
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
        borderBottomWidth: 2,
        borderBottomColor: "#FFF",
        backgroundColor: "#191e22"

    },
    content: {
        width: '100%',
        paddingBottom: 20,
        alignItems: 'center',
        backgroundColor: "#191e22",
    }, 

    bar: {
        width: '98%',
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#252c36',
        marginTop: 20,
        borderRadius: 10,
    },

    left: {
        width: '50%',
        height: '100%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
    },

    right: {
        width: '50%',
        height: '100%',
        borderBottomRightRadius: 10,
        borderTopEndRadius: 10,

        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 10,
    },

})

export default stylesHome;