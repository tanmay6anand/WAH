import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Signin } from './component/signin';
import { Register } from './component/register';

const Stack = createStackNavigator();
export default function App(){
    return(
        <NavigationContainer>
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
    </NavigationContainer>
    )
}
