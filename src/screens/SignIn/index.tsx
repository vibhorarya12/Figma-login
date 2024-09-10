import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Main_img from "../../../assets/images/welcome/logo.png";
import footer_img from "../../../assets/images/Signin/Maskgroup.png";

import Ionicons from '@expo/vector-icons/Ionicons';
import CustomBtn from '@/src/components/CustomBtn';
import { router } from 'expo-router';
const SignInScreen = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [loading , setLoading] = useState(false);
    const handleAction = async () => {
        if (!phone || !phone || !password) {
            Alert.alert(
                'Error',
                'Please fill in all the fields'
            );
            return; 
        }
        setLoading(true);
        try {
            const response = await fetch('https://tor.appdevelopers.mobi/api/login', {
                method: 'POST', // Specify the HTTP method
                headers: {
                    'Content-Type': 'application/json', // Specify the content type
                },
                body: JSON.stringify({ phone, password }) // Convert phone and password to JSON
            });
    
            // Optional: handle the response, check status, etc.
            const data = await response.json();
            if (response.ok && data.status ) {
                console.log("Login successful", data.data.name);
                router.navigate({
                    pathname: '/(tabs)/sign-up-2',
                    params: { name: data.data.name }
                });
            } else {
                alert('invalid credentials')
            }
    
        } catch (error) {
            console.error("Error during login:", error);
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.mainImg} source={Main_img} />
            <View style={styles.titleTxtContainer}>
                <Text style={styles.title}>Sign In</Text>
                <Text style={styles.subtitle}>
                    Hi ! Welcome back, you have been missed
                </Text>
            </View>
            <View style={{ position: 'absolute', width: 47, height: 21, top: 366, left: 24 }}>
                <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 21 }}>Phone</Text>
            </View>
            <View style={styles.inputTxtContainer}>
                <Ionicons color={'#808080'} name='call-outline' size={24} />
                <TextInput keyboardType={'number-pad'} placeholderTextColor={'#808080'} cursorColor={'green'} placeholder='Phone number' onChangeText={(e) => setPhone(e)} value={phone} style={{ width: 104, borderColor: 'red', height: 21 }} />
            </View>
            {/* PasswordLabel */}
            <View style={{ position: 'absolute', width: 69, height: 21, top: 464, left: 24 }}>
                <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 21 }}>Password</Text>
            </View>
            <View style={[styles.inputTxtContainer, { top: 501 }]}>
                <Ionicons color={'#808080'} name='lock-closed-outline' size={24} />
                <TextInput secureTextEntry={showPassword} placeholderTextColor={'#808080'} cursorColor={'green'} placeholder='password' onChangeText={(e) => setPassword(e)} value={password} style={{ width: 104, borderColor: 'red', height: 21 }} />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ left: 180 }}>
                    <Ionicons color={'#808080'} name={!showPassword?'eye-outline':'eye-off-outline'} size={24} />
                </TouchableOpacity>

            </View>

            <View style={{
                width: 129,
                height: 21,
                top: 562,
                left: 275,

                position: 'absolute',

            }}>

                <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 21, alignSelf: 'center', textDecorationLine: 'underline' }}>Forgot password ?</Text>
            </View>

            {/* signin button */}
        {loading?<ActivityIndicator size={35} style={{position: 'absolute', top: 607}}/>:<CustomBtn style={{ position: 'absolute', top: 607, height: 61 }} title={"Sign In"} action={handleAction} />}

                {/* divider */}
            <View style={{ width: 275, height: 16.29, position: 'absolute', top: 692, flexDirection: 'row', gap: 5 , left:77}}>
                <View style={{ borderWidth: 1, borderColor: '#A3CFFF', width: 120.42, alignSelf: 'center' }}>

                </View>
                <Text style={{ fontWeight: '500', fontSize: 15, lineHeight: 15.74, alignSelf: 'center', color: '#666161' }}>or</Text>
                <View style={{ borderWidth: 1, borderColor: '#A3CFFF', width: 120.42, alignSelf: 'center' }}>

                </View>

            </View>

            {/* logos */}

                <TouchableOpacity style={{width:43.6, height:43.6, position:'absolute', top:732.29, borderWidth:1, borderColor:'#A3CFFF', left:160, justifyContent:'center', borderRadius:32}}>
                <Ionicons color={'#000000'} name='logo-google' size={15}  style={{alignSelf:'center'}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{width:43.6, height:43.6, position:'absolute', top:732.29, borderWidth:1, borderColor:'#A3CFFF', left:225.4, justifyContent:'center', borderRadius:32}}>
                <Ionicons color={'#000000'} name='logo-apple' size={15}  style={{alignSelf:'center'}}/>
                </TouchableOpacity>


             {/* footerImage    */}

             <View style={{ width:228, height:271, position:'absolute', top:749, left:-56 , zIndex:-1 }}>
                <Image source={footer_img} resizeMode={'contain'}  />
             </View>

              {/* footer text   */}
             <TouchableOpacity onPress={()=> router.navigate('/(tabs)/sign-up')} style={{width:218 , height:21 , position:'absolute', top:805, left:101, flexDirection:'row'}}>
            <Text style={{fontWeight:'500', fontSize:14 , lineHeight:21, color:'#000000B2', textAlign:'right'}}>Don’t have an account?</Text>
            <Text style={{textDecorationLine:'underline', fontWeight:'700', fontSize:14 , lineHeight:21, color:'#000000', textAlign:'right'}}> Sign Up</Text>

             </TouchableOpacity>

             
             <View style={{width:380 , height:42 ,  position:'absolute', top:840, left:24, flexDirection:'row'}}>
            <Text style={{fontWeight:'500', fontSize:14 , lineHeight:21, color:'#808080', textAlign:'center'}}>
            By login or sign up, you agree to our terms of use and privacy policy
            </Text>
             </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    mainImg: {
        width: 233,
        height: 170,
        top: 50,
        position: 'absolute'
    },
    titleTxtContainer: {
        width: 191,
        height: 104,

        position: 'absolute',
        top: 238,
        left: 24
    },
    title: {
        fontWeight: '700',
        fontSize: 32,
        lineHeight: 48,
        color: "#000000"
    },
    subtitle: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '500',
        color: '#808080'
    },
    inputTxtContainer: {
        minWidth: 380,
        borderWidth: 1,
        minHeight: 53,
        position: 'absolute',
        top: 395,
        left: 24,
        flexDirection: 'row',
        borderRadius: 8,
        padding: 16,
        gap: 8,
        borderColor: '#808080'
    }

})


export default SignInScreen;