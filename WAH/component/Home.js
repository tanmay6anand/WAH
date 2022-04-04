import React, { useState } from 'react';
import { AuthContext } from './context';
import global from './global';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert, StatusBar } from 'react-native';
export function Home({ navigation }) {
    const { signout } = React.useContext(AuthContext);


    return (
        <View style={{
            flex: 1,
            backgroundColor: '#059DC0', paddingLeft: '3%', paddingTop: '3%'
        }}>


            <View style={styles.container}>


                <Text style={{ fontSize: 40, marginBottom: 20, color: 'white' }}>Welcome</Text>
                {/* <Image style={{ width: 250, height: 250, marginBottom: 10 }} source={require('../android/app/src/main/assets/W.png')} /> */}
                <Text style={{ fontSize: 40, marginBottom: 20, color: 'white', fontSize: 20, alignSelf: 'center' }}>Hi ,{global.name} {'\n'} Your premium car cleaning and washing service at your doorstep!</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Contact')}
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
                    <Text style={{ fontFamily: 'JosefinSans-SemiBold', fontSize: 20, paddingRight: 5, paddingBottom: 3, color: '#059DC0', alignSelf: 'center' }}>Contact</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => signout()}
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
                    <Text style={{ fontFamily: 'JosefinSans-SemiBold', fontSize: 20, paddingRight: 5, paddingBottom: 3, color: '#059DC0', alignSelf: 'center' }}>LOGOUT</Text>
                </TouchableOpacity>



            </View>
        </View >
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