import { View, Text, StyleSheet, Image ,TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Main_img from "../../../assets/images/welcome/logo.png";

import Ionicons from '@expo/vector-icons/Ionicons';
const SignInScreen = () => {
  const [text , setText] = useState('');


  return (
    <SafeAreaView style={styles.container}>
    <Image style={styles.mainImg} source={Main_img} />
    <View style={styles.titleTxtContainer}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>
        Hi ! Welcome back, you have been missed
        </Text>
    </View>
    <View style={{position:'absolute', width:39, height:21, top:366, left:24}}>
    <Text style={{fontWeight:'500', fontSize:14, lineHeight:21}}>Email</Text>
    </View>
    <View style={styles.inputTxtContainer}>
        <Ionicons color={'#808080'} name='mail-outline' size={24} />
       <TextInput placeholderTextColor={'#808080'} cursorColor={'green'} placeholder='xyz@gmail.com' onChangeText={(e)=>setText(e)} value={text} style={{width:104,  borderColor:'red', height:21}} />
    </View>
    {/* PasswordLabel */}
    <View style={{position:'absolute', width:69, height:21, top:464, left:24}}>
    <Text style={{fontWeight:'500', fontSize:14, lineHeight:21}}>Password</Text>
    </View>
    <View style={[styles.inputTxtContainer, {top:501}]}>
        <Ionicons color={'#808080'} name='lock-closed-outline' size={24} />
       <TextInput placeholderTextColor={'#808080'} cursorColor={'green'} placeholder='password' onChangeText={(e)=>setText(e)} value={text} style={{width:104,  borderColor:'red', height:21}} />
        <TouchableOpacity style={{left:180}}>
        <Ionicons color={'#808080'}  name='eye-outline' size={24} />
        </TouchableOpacity>
       

    </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    mainImg:{
        width:233,
        height:170,
        top:50,
        position:'absolute'
    },
    titleTxtContainer:{
            width:191,
            height:104,
           
            position:'absolute',
            top:238,
            left:24
    },
    title:{
        fontWeight:'700',
        fontSize:32,
        lineHeight:48,
        color:"#000000"
    },
    subtitle:{
        fontSize:16,
        lineHeight:24,
        fontWeight:'500',
        color:'#808080'
    },
    inputTxtContainer:{
        minWidth:380,
        borderWidth:1,
        minHeight:53,
        position:'absolute',
        top:395,
        left:24,
        flexDirection:'row',
        borderRadius:8,
        padding : 16,
        gap:8,
        borderColor:'#808080'
    }

})


export default SignInScreen;