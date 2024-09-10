import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity , Dimensions, ScrollView, KeyboardAvoidingView, Platform, Alert, ActivityIndicator} from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Main_img from "../../../assets/images/welcome/logo.png";
import footer_img from "../../../assets/images/SignUp/Maskgroup.png";

import Ionicons from '@expo/vector-icons/Ionicons';
import CustomBtn from '@/src/components/CustomBtn';
import { router } from 'expo-router';
import { Checkbox } from 'react-native-paper';
import CustomView from '@/src/components/CustomView';


const SignUpScreen = () => {

    const [name , setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const scrollViewRef = useRef<ScrollView>(null);
    const [loading , setLoading] = useState(false);
    const handleFocus = () => {
        if (scrollViewRef.current) {
          setTimeout(() => {
            scrollViewRef.current?.scrollTo({ y: 200, animated: true });
          }, 500); // 1 second delay
        }
      };
      

      const handleAction = async () => {
        if (!name || !phone || !password) {
            Alert.alert(
                'Error',
                'Please fill in all the fields'
            );
            return; 
        }
        setLoading(true);
        try {
            const response = await fetch('https://tor.appdevelopers.mobi/api/register', {
                method: 'POST', // Specify the HTTP method
                headers: {
                    'Content-Type': 'application/json', // Specify the content type
                },
                body: JSON.stringify({ phone, password , name })
            });
    
            // Optional: handle the response, check status, etc.
            const data = await response.json();
            if (response.ok  ) {
                console.log(data);
                Alert.alert( 'Success' ,'Registration successful');
                router.navigate({
                    pathname: '/(tabs)/sign-in',
                });
            } else {
                console.log(data);
                alert(data.error.phone[0])
            }
    
        } catch (error) {
            console.error("Error during login:", error);
        } finally {
            setLoading(false);
        }
    };
    



    return (

        
           <CustomView ref={scrollViewRef}>
            <Image style={styles.mainImg} source={Main_img} />
            <View style={styles.titleTxtContainer}>
                <Text style={styles.title}>Sign Up</Text>
                <Text style={styles.subtitle}>
                    Fill in the below form and add life to your car!
                </Text>
            </View>


            <View style={{ width: 39, height: 21, left: 24 , marginBottom:5}}>
                <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 21  }}>Name</Text>
            </View>
            <View style={styles.inputTxtContainer}>
                <Ionicons color={'#808080'} name='person-outline' size={24} />
                <TextInput placeholderTextColor={'#808080'} cursorColor={'green'} placeholder='name' onChangeText={(e) => setName(e)} value={name} style={{ width: 104, borderColor: 'red', height: 21 }} />
            </View>
            
            <View style={{  width: 47, height: 21, left: 24 , marginBottom:5 }}>
                <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 21 }}>Phone</Text>
            </View>
            <View style={[styles.inputTxtContainer]}>
                <Ionicons color={'#808080'} name='call-outline' size={24} />
                <TextInput keyboardType={'numeric'} placeholderTextColor={'#808080'} cursorColor={'green'} placeholder='Phone number' onChangeText={(e) => setPhone(e)} value={phone} style={{ width: 104, borderColor: 'red', height: 21 }} />
            </View>


            <View style={{  width: 69, height: 21,  left: 24 , marginBottom:5 }}>
                <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 21 }}>Password</Text>
            </View>
            <View style={[styles.inputTxtContainer]}>
                <Ionicons color={'#808080'} name='lock-closed-outline' size={24} />
                <TextInput  onFocus={handleFocus} secureTextEntry={showPassword} placeholderTextColor={'#808080'} cursorColor={'green'} placeholder='password' onChangeText={(e) => setPassword(e)} value={password} style={{ width: 104, borderColor: 'red', height: 21 }} />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ left: 180 }}>
                <Ionicons color={'#808080'} name={!showPassword?'eye-outline':'eye-off-outline'} size={24} />
                </TouchableOpacity>

            </View>



            <View style={{ width: 257, height: 21,   left: 32, borderColor: 'black', flexDirection: 'row' , marginTop:15}}>
               
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }], opacity: 0.6 }}>
                        <Checkbox
                            status={isChecked ? 'checked' : 'unchecked'}
                            onPress={() => setIsChecked(!isChecked)}
                            color='#46C6F7'
                        />
                    </View>

                </View>
                <Text style={{fontWeight:'500',fontSize:14, lineHeight:21, color:'#000000'}}>Agree with </Text>
                <TouchableOpacity style={{width:137, height:21}}>
                <Text style={{fontWeight:'500',fontSize:14, lineHeight:21, color:'#0000007D', textDecorationLine:'underline'}}>Terms & Conditions </Text>
                </TouchableOpacity>
            </View>

        {loading?<ActivityIndicator size={35} style={{marginTop:5}}/>:<CustomBtn style={{  height: 61 , left:24 , marginTop:18}} title={"Sign Up"} action={handleAction} />}

            <View style={{ width:311, height:40, position:'relative',  left:Dimensions.get('window').width*0.40 , zIndex:-1 }}>
                <Image source={footer_img} resizeMode={'contain'}  />
             </View>



             <TouchableOpacity onPress={()=> router.navigate('/(tabs)/sign-in')} style={{width:246 , height:21 , position:'relative',  left:91, flexDirection:'row'}}>
            <Text style={{fontWeight:'500', fontSize:14 , lineHeight:21, color:'#000000B2', textAlign:'right'}}>
            Already have an account?
            </Text>
            <Text style={{textDecorationLine:'underline', fontWeight:'700', fontSize:14 , lineHeight:21, color:'#000000', textAlign:'right'}}> Sign In</Text>

             </TouchableOpacity>



             <View style={{width:380 , height:42 ,  position:'relative',  left:24, flexDirection:'row', marginTop:15}}>
            <Text style={{fontWeight:'500', fontSize:14 , lineHeight:21, color:'#808080', textAlign:'center'}}>
            By login or sign up, you agree to our terms of use and privacy policy
            </Text>
             </View>

             </CustomView>
       
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
        left:98
        
       
    },
    titleTxtContainer: {
        width: 288,
        height: 94,
 
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
        lineHeight: 19.36,
        fontWeight: '500',
        color: '#808080',

    },
    inputTxtContainer: {
       width:380,
        borderWidth: 1,
        minHeight: 53,
        left: 24,
        flexDirection: 'row',
        borderRadius: 8,
        padding: 16,
        gap: 8,
        borderColor: '#808080',
        marginBottom:10
    }

})


export default SignUpScreen;