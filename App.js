
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import Home from "./src/screens/Home";
import SignInToken from "./src/screens/SignInToken";
import {Provider, Context} from './src/context/authContext';
import Detalhes from "./src/screens/Detalhes";

import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const App = () =>{
  const {state} = useContext(Context);
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInToken" screenOptions={{headerShown:false}}>
      { state.isLogged ? (
        <>
         <Stack.Screen name="Home" component={Home}/>
         <Stack.Screen name="Detalhes"  component={Detalhes}/>
         </>
      ) : (
      <>
        
          <Stack.Screen name="SignInToken" component={SignInToken}/>
          <Stack.Screen  name="SignIn" component={SignIn}/>
          <Stack.Screen name="SignUp" component={SignUp}/>
      </>
      )}

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () =>{
  return (
    <Provider>
      <SafeAreaProvider>
         <App/>
      </SafeAreaProvider>
    </Provider>
  )
};