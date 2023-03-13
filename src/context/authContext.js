import createContext from "./createContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../api/index";

const initialState = {
    loginError: false,
    isLogged: false,
    isLoggedToken: false,
    isDetails: "BTC"
};


const reducer = (state, actions) => {
    switch(actions.type){
        case "LoginError":
            return {...state, loginError: actions.payload}
        case "isLogged":
            return {...state, isLogged: actions.payload}
        case "isLoggedToken":
            return {...state, isLoggedToken: actions.payload}
        case "isDetails":
            return {...state, isDetails: actions.payload}
        default:
            return state;
    }
}

const teste = (dispacht) =>{
    return (args) =>{
        console.log("Teste");
    }
}

const loginError = (dispacht) =>{
    return (boolean) => {
        dispacht({type: "LoginError", payload: boolean})
    }
}

 const setIsLogged = (dispacht)=>{
    return(boolean) =>{
        dispacht({type: "isLogged", payload: boolean})
    }
}

const setIsDetails = (dispacht) =>{
    return(value) =>{
        dispacht({type: "isDetails", payload: value})
    }
}

/*const setIsLoggedToken = (dispacht) => {
    return(boolean) => {
        dispacht({type: "isLoggedToken", payload: boolean})
    }
}*/

const createUser = (dispacht) =>{
    return async (nome, email, senha) =>{

        try{

            await api.post("/user/cadastro", {
                nome: nome ,
                email: email,
                senha: senha,
            });

        }catch(error){
           console.log(error)
        }
    }
}

const loginUser = (dispacht) =>{
    return async (email, senha) =>{

        try{
         const data = await api.post("/user/login", {
                email: email,
                senha: senha,
            })

        await AsyncStorage.setItem("token", data.data.user.token)
        const token = await AsyncStorage.getItem("token");
        //console.log(token);

        console.log(data.data);
        data.data.user.email
        }catch(error){
           console.log("ERROR AO EXECUTAR O L0GIN USER: ",error);
        }
    }
}

const ola = (dispacht)=>{
    return ()=>{
        alert("ola");
    }
}

export const {Context, Provider} = createContext(
    reducer,
    {teste, createUser, loginUser, loginError, setIsLogged,ola, setIsDetails},
    initialState
)