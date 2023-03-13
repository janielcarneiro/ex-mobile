import React, {useContext, useState} from "react";
import { View , 
        StyleSheet, 
        TouchableOpacity, 
        TouchableWithoutFeedback,
        Keyboard
       } from "react-native";
import {Context} from "../context/authContext";

import {Button, HelperText, Text, TextInput} from "react-native-paper"

import { SafeAreaView } from "react-native-safe-area-context";
import NomeInput from "../components/NomeInput";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";


const SignUp = ({navigation}) =>{

  const {state, teste, createUser, loginError} = useContext(Context);

  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(true)

  console.log(teste);
  return(
    
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    <SafeAreaView style={styles.container}>
      <Text style={styles.login}>Criar Conta</Text>

     <NomeInput value={name} setValue={setName}/>
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
      onPress={() => {
        if(name === "" || email === "" || password === ""){
          loginError(true)
          return;
        }
        createUser(name, email, password);
        navigation.navigate("SignIn");
      }}
      >Criar Conta</Button>
      {state.loginError ? <HelperText  style={{alignSelf: "center"}} type="error"
        visible={state.loginError}>
        cadastro Error
      </HelperText> :
      null
      }
      <TouchableOpacity onPress={()=> {
        navigation.navigate("SignIn")
        loginError(false)
        }}>
        <Text>
          Você já tem conta? {" "}
          <Text style={styles.createAccountText}>
            Faça Login
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

  TextInput: {
    marginBottom: 10
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

export default SignUp;