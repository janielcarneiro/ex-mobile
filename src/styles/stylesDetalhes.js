import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#191e22',
    },
    content: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
        paddingTop: 0
    },

    dt: {
        width: '100%',
        height: '100%',
        backgroundColor: 'gray',
        paddingTop: 0
    },
    infor: {
        width: '100%',
        backgroundColor: 'white',
        paddingTop: 0
    },
    preco: {
        width: '100%',
        backgroundColor: 'orange',
        paddingLeft: 15,
        paddingRight: 15,
    },
    
    barra: {
        width: '100%',
        height: 30,
        backgroundColor: '#FFFFFF'
    },

    header: {
        width: '100%',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        paddingLeft: 15,
        paddingRight: 15
    },

    coin: {
        backgroundColor: 'pink',
        width: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 10,
    },
    cores: {
        color: 'white',
        fontWeight: 'bold',
    },

    dados: {
        width: '100%', 
        backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center'
    },

    caixa_conversor: {
        height: 190,
        backgroundColor: 'blue',
        width: '90%',
        marginTop: 30,
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 10
        
    },

    textoMoeda: {
        color: 'white', 
        fontSize: 15, 
        fontWeight: 'bold',
    },
    precoMoeda:{
        fontSize: 23, 
        fontWeight: 'bold',
    },
    
    variacaoMoeda: {
        color:"green",
        fontSize: 15, 
        fontWeight: 'bold',
    }
})

export default styles;