import React from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";
import stylesHome from "../styles/stylesHomes";


export default function Bar({onpress, image, nome, preco, moeda ,variacao}){
    
    let prc = Number(preco);
    let vari = Number(variacao);
    return(
    <TouchableOpacity style={stylesHome.bar}  onPress={onpress}>
                  <View style={stylesHome.left}>

                      <Image source={{uri: image}}
                      style={{width: 50, height: 50, borderRadius: 25, marginRight: 10}}
                      
                      />

                      <Text style={{color: 'white', fontWeight: "bold"}}>{nome}</Text>
                  </View>

                  <View style={stylesHome.right}>
                      <Text style={{color: 'white', fontWeight: "bold"}}> {
                      (prc).toFixed(2)
                      } - {(moeda)} </Text>
                      {vari > 0 
                      ?
                      <Text style={{color: 'green',}}>{(vari).toFixed(2)+"%"} - 24h</Text>
                      :
                      <Text style={{color: 'red'}}>{(vari).toFixed(2)+"%"} - 24h</Text>
                    }
                      
                  </View> 

              </TouchableOpacity>
    )
}
