import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert, StatusBar } from 'react-native';
export function Contact({navigation}) {
    
    
     
      return (
          <View style={{ flex:1,
              backgroundColor: '#fff',paddingLeft:'3%',paddingTop:'3%'
              }}>
                  
          
          <View style={styles.container}>
           
              
             <Text style={{fontSize:40,marginBottom:20}}>Contact Us</Text>
             <Image style={{width:250,height:250,marginBottom:10}} source={require('../android/app/src/main/assets/W.png')} />
            
              
             
             
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