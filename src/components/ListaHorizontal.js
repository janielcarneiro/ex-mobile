import React from "react";
import { Text, FlatList, View, Dimensions } from "react-native";
import { LogBox } from "react-native";

const {width} = Dimensions.get('window');

const as = 'ola';

const ListaHorizontal = ({data})=>{

    
    return(
        
        <FlatList
        data={data}
        keyExtractor={item=>item.id}
        horizontal
        snapToAlignment={'start'}
        scrollEventThrottle={16}
        decelerationRate = 'fast'
        style={{marginTop: 20}}
        renderItem={({item, index}) =>{
            return(
            <>
            <View style={{
                backgroundColor: 'pink',
                height: 90,
                width: width * 0.8,
                marginHorizontal: 10,
                borderRadius: 12,
            }}>
                <Text>Descrição: {item.desc[0]} - Valor: {item.desc[1]}</Text>
                
            </View>
            </>
            )
        }
        
    }
        >
            
        </FlatList>
        
    )
}

export default ListaHorizontal;