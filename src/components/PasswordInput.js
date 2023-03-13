import { useContext } from "react";
import { StyleSheet } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import { Context } from "../context/authContext";

const PasswordInput = ({value, setValue, showPassword, setShowPassword}) =>{
    
  const {state} = useContext(Context)

  return(
      <>
        <TextInput 
            style={styles.TextInput}
            label="Senha" 
            mode="outlined"
            value={value}
            onChangeText={(text)=> setValue(text)}
            left={
              <TextInput.Icon
                icon="lock"
                size={25}
                color="blue"
              />
            
            }  
            error={state.loginError} 
            secureTextEntry={showPassword}
            right = {
              showPassword ? (
                <TextInput.Icon
                icon="eye"
                size={25}
                color="blue"
                onPress={()=> setShowPassword(!showPassword)}
              />
              ):(
              <TextInput.Icon
                icon="eye-off"
                size={25}
                color="blue"
                onPress={()=> setShowPassword(!showPassword)}
              />
              )
            }
          />

      {state.loginError ? 
        <HelperText type="error" visible={state.loginError}>
            senha não existe
        </HelperText>
        :
        null
      }
          </>
    )
}

const styles = StyleSheet.create({
    TextInput: {
        marginBottom: 10
      },
})

export default PasswordInput;