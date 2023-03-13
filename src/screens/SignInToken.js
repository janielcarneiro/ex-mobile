import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, {useContext, useEffect} from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import api from "../api";
import { Context } from "../context/authContext";

const SignInToken = () =>{
    const {setIsLogged} = useContext(Context)
    const navigation = useNavigation();
    useEffect(()=>{

        const SignInToken = async () =>{
            const token = await AsyncStorage.getItem("token");
            
            if(token){
                try{
                const data = api.get("/",{
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })  

                    setIsLogged(true); 
                    console.log(data.data)
                }catch(error){
                    navigation.navigate("SignIn")
                    console.log(error);
                }

            }else{
                navigation.navigate("SignIn");  
            }
        }
        SignInToken();
    },[])

    return(
        <View style={styles.container}>
            <ActivityIndicator color="black" size={40}/>
            <Text>SignInToken</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default SignInToken;