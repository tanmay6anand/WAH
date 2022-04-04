import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert, StatusBar } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { AuthContext } from './context';
export function Register({ navigation }) {
    const [name, SetName] = useState("");
    const [age, SetAge] = useState("");
    const [addr, SetAddr] = useState("");
    const [mob, Setmob] = useState("");
    const [pass, SetPass] = useState("");
    const [type, SetType] = useState("");
    const [email, SetEmail] = useState("");
    const { signin } = React.useContext(AuthContext);
    const register = (email, password, name, mob, addr, type) => {
        fetch("https://wash-at-home.herokuapp.com/signup", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                phone: mob,
                name: name,
                address: addr,
                cars: type
            })
        })
            .then(res => res.json()).then(data => {
                console.log("result:", data);
                if (data.message === "User created") {
                    navigation.navigate('Home')
                    Alert.alert("User Created Successfully!")
                    fetch("https://wash-at-home.herokuapp.com/contactus", {
                        method: "post",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: email,
                            phone: mob,
                            name: name,
                            address: addr,
                            cars: type
                        })
                    })

                        .then(res => res.json()).then(data => {
                            console.log("result:", data);
                        })
                }
                else {
                    Alert.alert("Invalid Details");
                }
            })
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff', paddingLeft: '3%', paddingTop: '3%'
        }}>


            <View style={styles.container}>


                <Text style={{ fontSize: 40, marginBottom: 20 }}>Wash At Home</Text>
                <TextInput
                    style={{ marginTop: 10, margin: 5, padding: 5, paddingLeft: 20, backgroundColor: '#EBEDEF', width: 300, borderRadius: 20, fontSize: 15, height: 50, color: "black" }}
                    placeholder='Name'
                    autoCapitalize='none'
                    placeholderTextColor='black'
                    value={name}
                    onChangeText={(val) => SetName(val)}
                />
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
                    placeholder='Phone'
                    autoCapitalize='none'
                    keyboardType='number-pad'
                    maxLength={10}
                    placeholderTextColor='black'
                    value={mob}
                    onChangeText={(val) => Setmob(val)}
                />
                {/* <TextInput
                    style={{ marginTop: 10, margin: 5, padding: 5, paddingLeft: 20, backgroundColor: '#EBEDEF', width: 300, borderRadius: 20, fontSize: 15, height: 50, color: "black" }}
                    placeholder='Age'
                    autoCapitalize='none'
                    keyboardType='number-pad'
                    placeholderTextColor='black'
                    value={age}
                    onChangeText={(val) => SetAge(val)}
                /> */}
                <TextInput
                    style={{ marginTop: 10, margin: 5, padding: 5, paddingLeft: 20, backgroundColor: '#EBEDEF', width: 300, borderRadius: 20, fontSize: 15, height: 100, color: "black" }}
                    placeholder='Address'
                    autoCapitalize='none'
                    placeholderTextColor='black'
                    value={addr}
                    multiline
                    onChangeText={(val) => SetAddr(val)}
                />
                <TouchableOpacity style={{ marginTop: 10, margin: 5, backgroundColor: '#EBEDEF', width: 300, borderRadius: 20, fontSize: 15, height: 50, color: "black" }}
                >
                    <Picker
                        selectedValue={type}
                        style={{ color: 'black' }}
                        onValueChange={(itemValue, itemIndex) => SetType(itemValue)}
                    >
                        <Picker.Item label="Select" value="" />
                        <Picker.Item label="Hatchback" value="Hatchback" />
                        <Picker.Item label="SUV" value="SUV" />
                        <Picker.Item label="Sedan" value="Sedan" />
                        <Picker.Item label="Luxury" value="Luxury" />
                    </Picker>
                </TouchableOpacity>
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
                    onPress={() => register(email, pass, name, mob, addr, type)}
                    style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.5,
                        shadowRadius: 4,

                        elevation: 7, marginTop: '10%', backgroundColor: '#059DC0', borderRadius: 25, paddingVertical: '2%', paddingHorizontal: '10%', justifyContent: 'center'
                    }}>
                    <Text style={{ fontFamily: 'JosefinSans-SemiBold', fontSize: 20, paddingRight: 5, paddingBottom: 3, color: 'white', alignSelf: 'center' }}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '15%'
    },
});