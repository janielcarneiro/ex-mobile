import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import { Context } from "../context/authContext";

const NomeInput = ({value, setValue}) =>{

  const {state} = useContext(Context);

    return(
      <>
        <TextInput 
        style={styles.TextInput}
        label="Nome" 
        mode="outlined"
        value={value}
        onChangeText={(text)=> setValue(text)}
        left={
          <TextInput.Icon
            icon="account"
            size={25}
            color="blue"
          />
        }
        error={state.loginError}
      />
      {state.loginError ? 
    <HelperText type="error" visible={state.loginError}>
      Nome não existe
    </HelperText>
    :
    null
    }
      </>
    )
}

const styles = StyleSheet.create({
    TextInput:{
        marginBottom: 10
    }
})

export default NomeInput;