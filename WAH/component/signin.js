import { loadPartialConfigAsync } from '@babel/core';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert, StatusBar } from 'react-native';
import global from './global';
import { AuthContext } from './context';

export function Signin({ navigation }) {
    const [pass, SetPass] = useState("");
    const [email, SetEmail] = useState("");
    const { signin } = React.useContext(AuthContext);
    const login = (username, password) => {
        fetch("https://wash-at-home.herokuapp.com/login", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: username,
                password: password
            })
        })
            .then(res => res.json()).then(data => {
                console.log("result:", data);
                if (data.message === "Auth successful") {
                    signin(data.token, data.response);
                    global.name = data.response.name;
                }
                else {
                    Alert.alert("Invalid Details");
                }
            })
    };

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#059DC0', paddingLeft: '3%', paddingTop: '3%'
        }}>


            <View style={styles.container}>


                <Text style={{ fontSize: 40, marginBottom: 20, color: 'white' }}>Wash At Home</Text>
                <Image style={{ width: 250, height: 250, marginBottom: 10 }} source={require('../android/app/src/main/assets/W.png')} />
                <TextInput
                    style={{ marginTop: 10, margin: 5, padding: 5, paddingLeft: 20, backgroundColor: '#EBEDEF', width: 300, borderRadius: 20, fontSize: 15, height: 50, color: "black" }}
                    placeholder='Email'
                    autoCapitalize='none'
                    placeholderTextColor='black'
                    value={email}
                    onChangeText={(val) => SetEmail(val)}
                />
                <TextInput
                    style={{ marginTop: 10, margin: 5, padding: 5, paddingLeft: 20, backgroundColor: '#EBEDEF', width: 300, borderRadius: 20, fontSize: 15, height: 50, color: "black" }}
                    placeholder='Password'
                    autoCapitalize='none'
                    placeholderTextColor='black'
                    secureTextEntry={true}
                    value={pass}
                    onChangeText={(val) => SetPass(val)}
                />

                <TouchableOpacity
                    onPress={() => login(email, pass)}
                    style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.5,
                        shadowRadius: 4,

                        elevation: 7, marginTop: '10%', backgroundColor: 'white', borderRadius: 25, paddingVertical: '2%', paddingHorizontal: '10%', justifyContent: 'center'
                    }}>
                    <Text style={{ fontFamily: 'JosefinSans-SemiBold', fontSize: 20, paddingRight: 5, paddingBottom: 3, color: '#059DC0', alignSelf: 'center' }}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={{ fontFamily: 'JosefinSans-SemiBold', fontSize: 20, paddingRight: 5, paddingBottom: 3, color: 'white', alignSelf: 'center', marginTop: 15 }}>Register</Text>
                </TouchableOpacity>



            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#059DC0',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '15%'
    },
});