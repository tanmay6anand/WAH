import 'react-native-gesture-handler';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Signin } from './component/signin';
import { Register } from './component/register';
import {AuthContext} from './component/context';
import AsyncStorage  from '@react-native-community/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Home } from './component/Home';
import { Contact } from './component/Contact';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function App(){
  const initialLoginState={
    isLoading:true,
    userName:null,
    userToken:null,
  };
     const loginReducer = (prevState, action) =>{
       switch (action.type) {
         case 'RETRIEVE_TOKEN':
           return {
             ...prevState,
             userToken: action.token,
             isLoading: false,
           };
         case 'LOGIN':
           return {
             ...prevState,
             userName: action.id,
             userToken: action.token,
             isLoading: false,
           };
         case 'LOGOUT':
           return {
             ...prevState,
             userName: null,
             userToken: null,
             isLoading: false,
            
           };
         case 'REGISTER':
           return {
             ...prevState,
             userName: action.id,
             userToken: action.token,
             isLoading: false,
           };
       }
     }
  const [loginState,dispatch]=React.useReducer(loginReducer,initialLoginState);
     const authContext=React.useMemo(()=>
     ({
       signin:async(token,uid,uname,data)=>{
         let userToken,userName;
           userToken=token;
           userName=uname;
           global.dataa=data;
           global.valuee=uid;
           AsyncStorage.setItem(
            'Data',
            JSON.stringify(data),
            () => {});
         dispatch({type:'LOGIN',id:userName,token:userToken});
       },
       signout:async()=>{
        const aa= await AsyncStorage.removeItem('Data');
         dispatch({type:'LOGOUT'});
       },
     }),[]);
     useEffect(()=>{
       setTimeout(()=>{
       Gettoken();
       },1000);
     },[]);
     async function Gettoken()
     {
      try {
        const myArray = await AsyncStorage.getItem('Data');
       // const myArray=null;
        if(myArray!=null){
     global.dataa=JSON.parse(myArray);
        const value = global.dataa["token"];
          // We have data!!
          global.drawername =global.dataa["response"]["firstname"];
          global.draweruname=global.dataa["response"]["username"];
          global.valuee=global.dataa["response"]["_id"];
          dispatch({type:'RETRIEVE_TOKEN',token:value});
        }
        else
        {
          dispatch({type:'RETRIEVE_TOKEN',token:null});
        }
      } catch (error) {
        console.log(error);
      }
     }
     //const [userToken, setUserToken]=useState(null);
    if(loginState.isLoading){
      return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:"#fff"}}>
           <Image style={{width: 158, height: 153}}
                  source={require('./android/app/src/main/assets/W.png')}/>
        </View>
      );
    }
    return(
      <AuthContext.Provider value={authContext} >
      <NavigationContainer>
        { loginState.userToken !=null ?(
<Stack.Navigator screenOptions={{
    headerStyle:{
  backgroundColor:'red',
    },
    headerTitleAlign:'center',
    headerTintColor:'white'
}}>
      <Stack.Screen name="Home" component={Signin} />
      <Stack.Screen name="Register" component={Register} />
      
    </Stack.Navigator>
        )
        :
       
         
        <Stack.Navigator screenOptions={{
          headerStyle:{
        backgroundColor:'red',
          },
          headerTitleAlign:'center',
          headerTintColor:'white'
      }}>
            <Stack.Screen name="Welcome" component={Home} />
            <Stack.Screen name="Contact" component={Contact} />
            
          </Stack.Navigator>
}
     
    </NavigationContainer>
    </AuthContext.Provider>
    )
}
