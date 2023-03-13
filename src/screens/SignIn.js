import React, {useContext, useState} from "react";
import { View , 
        StyleSheet, 
        TouchableOpacity,
        TouchableWithoutFeedback,
        Keyboard,
        DevSettings,
        BackHandler,
      } from "react-native";
import {Context} from "../context/authContext";

import {Button, HelperText, Text, TextInput} from "react-native-paper"

import { SafeAreaView } from "react-native-safe-area-context";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";



const SignIn = ({navigation}) =>{

  BackHandler.addEventListener('hardwareBackPress', () => true);

  const {state, teste, loginUser, loginError, ola} = useContext(Context);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(true)

  console.log(state);
  return(
    
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
      
    <SafeAreaView style={styles.container}>

      <Text style={styles.login}>Login</Text>

      <EmailInput value={email} setValue={setEmail}/>
      <PasswordInput
        value={password}
        setValue={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />

      <Button 
      mode="contained" 
      style={styles.loginButton}
      onPress={ async () => {
        if(email === "" || password === ""){
          loginError(true);
          return;
        }
        
        loginUser(email, password)
        DevSettings.reload();
        setEmail("");
        setPassword("")
        
      }}
      >Login</Button>
      
      
      {state.loginError ? <HelperText style={{alignSelf: "center"}} type="error"
        visible={state.loginError}>
        Login Error
      </HelperText> :
      null
      }
      

      <TouchableOpacity onPress={()=> {
        navigation.navigate("SignUp")
        loginError(false)
        }}>
        <Text>
          Não tem conta? {" "}
          <Text style={styles.createAccountText}>
            Crie uma
            </Text>
        </Text>
      </TouchableOpacity>

    </SafeAreaView>

    </TouchableWithoutFeedback>
    
  )
}

const styles = StyleSheet.create({

  container: {
    marginTop: "40%",
    alignSelf: "center",
    width: "80%"
  }, 

  login: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
  },

  loginButton: {
    padding: 5,
    margin: 20,
    width: "50%",
    alignSelf: "center",
  },

  createAccountText: {
    fontWeight: "bold",
    color: "#6200ee"
  }
})

export default SignIn;