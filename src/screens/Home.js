import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button, Image, TouchableOpacity, ScrollView, } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context } from "../context/authContext";
import Bar from "../components/Bar";

import stylesHome from "../styles/stylesHomes";
import api_coin from "../api/api_coin";

const Home = ({navigation}) =>{

    const {setIsLogged, setIsDetails} = useContext(Context)

    const [btc, setBTC] = useState([]);
    const [etc, setETH] = useState([]);
    const [aave, setAAVE] = useState([]);
    const [ada, setADA] = useState([]);
    const [ltc, setLTC] = useState([]);
    const [axs, setAXS] = useState([]);
    const [bch, setBCH] = useState([]);
    const [neo, setNEO] = useState([]);
    const [crv, setCRV] = useState([]);
    const [doge, setDOGE] = useState([]);
    const [bat, setBAT] = useState([]);
    const [ldo, setLDO] = useState([]);

  
    const loadBtc = async() =>{
        await api_coin.get('/crypto?coin=BTC&currency=BRL')
        .then(response => {
            setBTC(response.data.coins);
        })
    }

    const loadEth = async() =>{
        await api_coin.get('/crypto?coin=ETH&currency=BRL')
        .then(response => {
            setETH(response.data.coins);
        })

    }

    const Aave = async() =>{
        await api_coin.get('/crypto?coin=AAVE&currency=BRL')
        .then(response => {
            setAAVE(response.data.coins);
        })
    }

    const Ada = async() =>{
        await api_coin.get('/crypto?coin=ADA&currency=BRL')
        .then(response => {
            setADA(response.data.coins);
        })
    }

    const Ltc = async() =>{
        await api_coin.get('/crypto?coin=LTC&currency=BRL')
        .then(response => {
            setLTC(response.data.coins);
        })
    }

    const AXS = async() =>{
        await api_coin.get('/crypto?coin=AXS&currency=BRL')
        .then(response => {
            setAXS(response.data.coins);
        })
    }

    const BCH = async() =>{
        await api_coin.get('/crypto?coin=BCH&currency=BRL')
        .then(response => {
            setBCH(response.data.coins);
        })
    }

    const NEO = async() =>{
        await api_coin.get('/crypto?coin=NEO&currency=BRL')
        .then(response => {
            setNEO(response.data.coins);
        })
    }

    const CRV = async() =>{
        await api_coin.get('/crypto?coin=CRV&currency=BRL')
        .then(response => {
            setCRV(response.data.coins);
        })
    }

    const DOGE = async() =>{
        await api_coin.get('/crypto?coin=DOGE&currency=BRL')
        .then(response => {
            setDOGE(response.data.coins);
        })
    }

    const BAT = async() =>{
        await api_coin.get('/crypto?coin=BAT&currency=BRL')
        .then(response => {
            setBAT(response.data.coins);
        })
    }

    const LDO = async() =>{
        await api_coin.get('/crypto?coin=LDO&currency=BRL')
        .then(response => {
            setLDO(response.data.coins);
        })
    }
    
    useEffect(()=>{
        loadBtc();
        loadEth();
        Aave();
        Ada();
        Ltc();
        AXS();
        BCH();
        NEO();
        CRV();
        DOGE();
        BAT();
        LDO();
    },[])
    
    const nav = (valor) =>{
        navigation.navigate("Detalhes");
        setIsDetails(valor);
    }

     return(

        <View style={stylesHome.container}>
            <View style={{width: '100%',
        height: 30,
        backgroundColor: '#FFFFFF'}}></View>

            <View style={stylesHome.header} >

            <Image source={require('../../assets/Bitcoin.png')}
                style={{width: 60, height: 60,}}
                
            />
                
            <View>
                <Text style={{color: "white", fontWeight: "bold", fontSize: 18}}>EX MOBILE</Text>
            </View>

            <View>
                
                <Button 
                    title="logout"  
                    onPress={async()=>{
                        await AsyncStorage.removeItem("token");
                        setIsLogged(false)
                    }}    
                />
             </View>
             
            </View>

        <ScrollView>
            <View style={stylesHome.content}>
                {btc.map (t=>(
                   <Bar key={t.toString()}
                   onpress={()=> {
                    nav(t.coin)
                }}
                   image={t.coinImageUrl} 
                   nome={t.coin} 
                   preco={ t.regularMarketPrice} 
                   moeda={t.currency}
                   variacao={t.regularMarketChangePercent}
                   />

                ))}

                {etc.map (t=>(
                   <Bar key={t.toString()}
                   onpress={()=> nav(t.coin)}
                   image={t.coinImageUrl} 
                   nome={t.coin} 
                   preco={t.regularMarketPrice} 
                   moeda={t.currency}
                   variacao={t.regularMarketChangePercent}
                   />

                ))}

                {aave.map (t=>(
                   <Bar key={t.toString()}
                   onpress={()=> nav(t.coin)}
                   image={t.coinImageUrl} 
                   nome={t.coin} 
                   preco={t.regularMarketPrice} 
                   moeda={t.currency}
                   variacao={t.regularMarketChangePercent}
                   />

                ))}

                {ada.map (t=>(
                   <Bar key={t.toString()}
                   onpress={()=> nav(t.coin)}
                   image={t.coinImageUrl} 
                   nome={t.coin} 
                   preco={t.regularMarketPrice} 
                   moeda={t.currency}
                   variacao={t.regularMarketChangePercent}
                   />

                ))}

                {ltc.map (t=>(
                   <Bar key={t.toString()}
                   onpress={()=> nav(t.coin)}
                   image={t.coinImageUrl} 
                   nome={t.coin} 
                   preco={t.regularMarketPrice} 
                   moeda={t.currency}
                   variacao={t.regularMarketChangePercent}
                   />

                ))}

                {axs.map (t=>(
                   <Bar key={t.toString()}
                   onpress={()=> nav(t.coin)}
                   image={t.coinImageUrl} 
                   nome={t.coin} 
                   preco={t.regularMarketPrice} 
                   moeda={t.currency}
                   variacao={t.regularMarketChangePercent}
                   />

                ))}

                {bch.map (t=>(
                   <Bar key={t.toString()}
                   onpress={()=> nav(t.coin)}
                   image={t.coinImageUrl} 
                   nome={t.coin} 
                   preco={t.regularMarketPrice} 
                   moeda={t.currency}
                   variacao={t.regularMarketChangePercent}
                   />

                ))}

                {neo.map (t=>(
                   <Bar key={t.toString()}
                   onpress={()=> nav(t.coin)}
                   image={t.coinImageUrl} 
                   nome={t.coin} 
                   preco={t.regularMarketPrice} 
                   moeda={t.currency}
                   variacao={t.regularMarketChangePercent}
                   />

                ))}
                {crv.map (t=>(
                   <Bar key={t.toString()}
                   onpress={()=> nav(t.coin)}
                   image={t.coinImageUrl} 
                   nome={t.coin} 
                   preco={t.regularMarketPrice} 
                   moeda={t.currency}
                   variacao={t.regularMarketChangePercent}
                   />

                ))}
                {doge.map (t=>(
                   <Bar key={t.toString()}
                   onpress={()=> nav(t.coin)}
                   image={t.coinImageUrl} 
                   nome={t.coin} 
                   preco={t.regularMarketPrice} 
                   moeda={t.currency}
                   variacao={t.regularMarketChangePercent}
                   />

                ))}
                {bat.map (t=>(
                   <Bar key={t.toString()}
                   onpress={()=> nav(t.coin)}
                   image={t.coinImageUrl} 
                   nome={t.coin} 
                   preco={t.regularMarketPrice} 
                   moeda={t.currency}
                   variacao={t.regularMarketChangePercent}
                   />

                ))}
                 {ldo.map (t=>(
                   <Bar key={t.toString()}
                   onpress={()=> nav(t.coin)}
                   image={t.coinImageUrl} 
                   nome={t.coin} 
                   preco={t.regularMarketPrice} 
                   moeda={t.currency}
                   variacao={t.regularMarketChangePercent}
                   />

                ))}
                
            </View>

            </ScrollView>

        </View>

    )
}

export default Home;