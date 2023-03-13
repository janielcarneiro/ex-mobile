import React, { useContext, useEffect, useState } from "react";
import { View,Text, Button, Image, ScrollView, FlatList, Dimensions} from "react-native";
import {TextInput } from "react-native-paper";
import {Context} from "../context/authContext";

import styles from "../styles/stylesDetalhes";
import api_coin from "../api/api_coin";

const Detalhes = ({navigation})=>{

    //Meus estados
    const [coinname, setCOINNAME] = useState([]);

    //consumindo a API
    const coin = async() =>{
        await api_coin.get(`/crypto?coin=${state.isDetails}&currency=BRL`)
        .then(response => {
            setCOINNAME(response.data.coins);
            console.log("Minha requisição: ", coinname.map(t => (t.coin)));
        })
    }

    useEffect(()=> {
        coin()
    },[])



    const {state} = useContext(Context);
    const {width} = Dimensions.get('window');

    const nav = () => {
        navigation.navigate("Home")
    }

    const data = [
        {
            id: '001',
            desc: ['mouse', '25']
        },

        {
            id: '002',
            desc: ['pendrive', '25']
        },

        {
            id: '003',
            desc: ['Computador', '25']
        }
    ];

    return(
        <View style={styles.container}>

        <View style={styles.content}>
        <View style={styles.barra}></View>


        <View style={styles.header}>
            <Button title="voltar" onPress={()=> nav()}/>

            <View style={styles.coin}>
                <Image source={{uri: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"}}
                    style={{width: 40, height: 40}}
                    
                />
                <Text style={styles.cores}>{state.isDetails}</Text>
            </View>

            <Text style={styles.cores}>{state.isDetails}</Text>
        </View>

    
        <View style={styles.dt}>
            <View style={styles.infor}>

                <View style={styles.preco}>
                    <Text style={styles.textoMoeda}>Preço da Moeda</Text>
                    <Text style={styles.precoMoeda}>{coinname.map(t => ((t.regularMarketPrice).toFixed(2)))}  { coinname.map(t => (t.coinName))}

                    </Text>
                    <Text style={styles.variacaoMoeda}> {coinname.map(t => (t.regularMarketChangePercent).toFixed(2))} - 24 h</Text>
                </View>  

        <View style={{backgroundColor: 'gray'}}>

            <FlatList
                    data={data}
                    keyExtractor={item=>item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToAlignment={'start'}
                    scrollEventThrottle={16}
                    decelerationRate = 'fast'
                    style={{marginTop: 20}}
                    renderItem={({item, index}) =>{
                        return(
                        <>
                        <View style={{
                            backgroundColor: 'pink',
                            height: 80,
                            width: width * 0.8,
                            marginHorizontal: 10,
                            borderRadius: 12,
                            marginBottom: 10
                        }}>
                            <Text>Descrição: {item.desc[0]} - Valor: {item.desc[1]}</Text>
                            
                        </View>
                        </>
                        )
                    }
                    
                }
                    >
                
            </FlatList>

        </View>     
    
        <ScrollView>
            <View style={styles.dados}>

                <View style={styles.caixa_conversor}>
                    <TextInput 
                    label="digete valor real"
                    mode="outlined"
                    keyboardType="numeric"
                    left= {
                    <TextInput.Icon
                    icon="account"
                    size={25}
                    color="blue"
                    keyboardType={'numeric'}
                    />
                }
                    />

                <TextInput 
                    disabled
                    label="convertido para bitcoin"
                    mode="outlined"
                    keyboardType="numeric"
                    value={'0'}
                    style={{marginBottom: 8}}
                    left= {
                    <TextInput.Icon
                    icon="account"
                    size={25}
                    color="blue"
                    />
                    }
                    />

                <Button title="CONVERTER"/>

                </View>

                <Text> Estou no Detalhes</Text>
                <Text>Moeda: {state.isDetails}</Text>
                <Text> Estou no Detalhes</Text>
                <Text>Moeda: {state.isDetails}</Text>
                <Text> Estou no Detalhes</Text>
                <Text>Moeda: {state.isDetails}</Text>
                <Text> Estou no Detalhes</Text>
                <Text>Moeda: {state.isDetails}</Text>
                <Text> Estou no Detalhes</Text>
                <Text>Moeda: {state.isDetails}</Text>
                <Text> Estou no Detalhes</Text>
                <Text>Moeda: {state.isDetails}</Text>
                <Text> Estou no Detalhes</Text>
                <Text>Moeda: {state.isDetails}</Text>
                <Text> Estou no Detalhes</Text>
                <Text>Moeda: {state.isDetails}</Text>
                <Text> Estou no Detalhes</Text>
                <Text>Moeda: {state.isDetails}</Text>
                <Text> Estou no Detalhes</Text>
                <Text>Moeda: {state.isDetails}</Text>
                <Text> Estou no Detalhes</Text>
                <Text>Moeda: {state.isDetails}</Text>
                <Text> Estou no Detalhes</Text>
                <Text>Moeda: {state.isDetails}</Text>
                <Text> Estou no Detalhes</Text>
                <Text>Moeda: {state.isDetails}</Text>
                <Text> Estou no Detalhes</Text>
                <Text>Moeda: {state.isDetails}</Text>
                <Text> Estou no Detalhes</Text>
                <Text>Moeda: {state.isDetails}</Text>
                <Text> Estou no Detalhes</Text>
                <Text>Moeda: {state.isDetails}</Text>
                <Text> Estou no Detalhes</Text>
                <Text>Moeda: {state.isDetails}</Text>
                <Text> Estou no Detalhes</Text>
                <Text>Moeda: {state.isDetails}</Text>
                <Text>Moeda: {state.isDetails}</Text>
                <Text> Estou no Detalhes</Text>
                <Text>Moeda: {state.isDetails}</Text>
                <Text> Estou no Detalhes</Text>
                <Text>Moeda: {state.isDetails}</Text>
                <Text> Estou no Detalhes</Text>
                <Text>Moeda: {state.isDetails}</Text>
                <Text> Estou no Detalhes</Text>
                <Text>Moeda: {state.isDetails}</Text>
            </View>

        </ScrollView>

        </View>
        </View>
        </View>
        </View>
    )
}

export default Detalhes;

