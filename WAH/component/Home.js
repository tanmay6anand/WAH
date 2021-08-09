import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert, StatusBar } from 'react-native';
export function Home({navigation}) {
    
    
     
      return (
          <View style={{ flex:1,
              backgroundColor: '#fff',paddingLeft:'3%',paddingTop:'3%'
              }}>
                  
          
          <View style={styles.container}>
           
              
             <Text style={{fontSize:40,marginBottom:20}}>Welcome</Text>
             <Image style={{width:250,height:250,marginBottom:10}} source={require('../android/app/src/main/assets/W.png')} />
            
              <TouchableOpacity onPress={()=>navigation.navigate('Contact')}>
                  <Text style={{ fontFamily:'JosefinSans-SemiBold',fontSize: 20,paddingRight:5,paddingBottom:3, color: 'black' ,alignSelf:'center',marginTop:15}}>Contact</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('Contact')}>
                  <Text style={{ fontFamily:'JosefinSans-SemiBold',fontSize: 20,paddingRight:5,paddingBottom:3, color: 'black' ,alignSelf:'center',marginTop:15}}>LOGOUT</Text>
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