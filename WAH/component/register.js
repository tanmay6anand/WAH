import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert, StatusBar } from 'react-native';
import {Picker} from '@react-native-picker/picker';
export function Register() {
    const [name,SetName]=useState("");
    const [age,SetAge]=useState("");
    const [addr,SetAddr]=useState("");
    const [mob,Setmob]=useState("");
    const [pass,SetPass]=useState("");
    const [type,SetType]=useState("");
    const [email,SetEmail]=useState("");
    
     
      return (
          <View style={{ flex:1,
              backgroundColor: '#fff',paddingLeft:'3%',paddingTop:'3%'
              }}>
                  
          
          <View style={styles.container}>
           
              
             <Text style={{fontSize:40,marginBottom:20}}>Wash At Home</Text>
             <TextInput
                  style={{ marginTop:10, margin: 5, padding: 5, paddingLeft: 20, backgroundColor: '#EBEDEF', width: 300, borderRadius: 20, fontSize: 15,height:50 }}
                  placeholder='Name'
                  autoCapitalize = 'none'
                  placeholderTextColor='black'
                  value={name}
                  onChangeText={(val) => SetName(val)}
              />
               <TextInput
                  style={{ marginTop:10, margin: 5, padding: 5, paddingLeft: 20, backgroundColor: '#EBEDEF', width: 300, borderRadius: 20, fontSize: 15,height:50 }}
                  placeholder='Email'
                  autoCapitalize = 'none'
                  placeholderTextColor='black'
                  value={email}
                  onChangeText={(val) => SetEmail(val)}
              />
               <TextInput
                  style={{ marginTop:10, margin: 5, padding: 5, paddingLeft: 20, backgroundColor: '#EBEDEF', width: 300, borderRadius: 20, fontSize: 15,height:50 }}
                  placeholder='Phone'
                  autoCapitalize = 'none'
                  keyboardType='number-pad'
                  maxLength={10}
                  placeholderTextColor='black'
                  value={mob}
                  onChangeText={(val) => Setmob(val)}
              />
               <TextInput
                  style={{ marginTop:10, margin: 5, padding: 5, paddingLeft: 20, backgroundColor: '#EBEDEF', width: 300, borderRadius: 20, fontSize: 15,height:50 }}
                  placeholder='Age'
                  autoCapitalize = 'none'
                  keyboardType='number-pad'
                  placeholderTextColor='black'
                  value={age}
                  onChangeText={(val) => SetAge(val)}
              />
             <TextInput
                  style={{ marginTop:10, margin: 5, padding: 5, paddingLeft: 20, backgroundColor: '#EBEDEF', width: 300, borderRadius: 20, fontSize: 15,height:50 }}
                  placeholder='Address'
                  autoCapitalize = 'none'
                  placeholderTextColor='black'
                  value={addr}
                  onChangeText={(val) => SetAddr(val)}
              />
              <TouchableOpacity style={{ marginTop:10, margin: 5, backgroundColor: '#EBEDEF', width: 300, borderRadius: 20, fontSize: 15,height:50 }}
                 >
               <Picker
        selectedValue={type}
        style={{color:'black' }}
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
                      style={{ marginTop:10, margin: 5, padding: 5, paddingLeft: 20, backgroundColor: '#EBEDEF', width: 300, borderRadius: 20, fontSize: 15,height:50 }}
                        placeholder='Password'
                        autoCapitalize = 'none'
                        placeholderTextColor='black'
                       secureTextEntry={true}
                        value={pass}
                        onChangeText={(val) => SetPass(val)}
                    />
              
              <TouchableOpacity
                 
                  style={{ shadowColor: "#000",
                  shadowOffset: {
                      width: 0,
                      height: 2,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 4,
                  
                  elevation: 7,marginTop:'10%', backgroundColor: '#FFAD2F',borderRadius: 25, paddingVertical:'2%', paddingHorizontal:'10%', justifyContent: 'center' }}>
                  <Text style={{ fontFamily:'JosefinSans-SemiBold',fontSize: 20,paddingRight:5,paddingBottom:3, color: 'white' ,alignSelf:'center'}}>Register</Text>
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
          paddingBottom:'15%'
      },
  });