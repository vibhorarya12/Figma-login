import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity , Dimensions} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Main_img from "../../../assets/images/welcome/logo.png";
import footer_img from "../../../assets/images/SignUp/Maskgroup.png";

import Ionicons from '@expo/vector-icons/Ionicons';
import CustomBtn from '@/src/components/CustomBtn';
import { router } from 'expo-router';
import { Checkbox } from 'react-native-paper';


const SignUpScreen = () => {
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const handleAction = () => {
        console.log("hello");
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.mainImg} source={Main_img} />
            <View style={styles.titleTxtContainer}>
                <Text style={styles.title}>Sign Up</Text>
                <Text style={styles.subtitle}>
                    Fill in the below form and add life to your car!
                </Text>
            </View>
            {/* name  */}
            <View style={{ position: 'absolute', width: 39, height: 21, top: 356, left: 24 }}>
                <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 21 }}>Name</Text>
            </View>
            <View style={[styles.inputTxtContainer, { position: 'absolute', top: 385 }]}>
                <Ionicons color={'#808080'} name='person-outline' size={24} />
                <TextInput placeholderTextColor={'#808080'} cursorColor={'green'} placeholder='name' onChangeText={(e) => setText(e)} value={text} style={{ width: 104, borderColor: 'red', height: 21 }} />
            </View>
            {/* email */}
            <View style={{ position: 'absolute', width: 39, height: 21, top: 457, left: 24 }}>
                <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 21 }}>Email</Text>
            </View>
            <View style={[styles.inputTxtContainer, { position: 'absolute', top: 486 }]}>
                <Ionicons color={'#808080'} name='mail-outline' size={24} />
                <TextInput placeholderTextColor={'#808080'} cursorColor={'green'} placeholder='xyz@gmail.com' onChangeText={(e) => setText(e)} value={text} style={{ width: 104, borderColor: 'red', height: 21 }} />
            </View>

            {/* Password */}
            <View style={{ position: 'absolute', width: 69, height: 21, top: 555, left: 24 }}>
                <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 21 }}>Password</Text>
            </View>
            <View style={[styles.inputTxtContainer, { top: 592, position: 'absolute' }]}>
                <Ionicons color={'#808080'} name='lock-closed-outline' size={24} />
                <TextInput secureTextEntry={showPassword} placeholderTextColor={'#808080'} cursorColor={'green'} placeholder='password' onChangeText={(e) => setPassword(e)} value={password} style={{ width: 104, borderColor: 'red', height: 21 }} />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ left: 180 }}>
                    <Ionicons color={'#808080'} name='eye-outline' size={24} />
                </TouchableOpacity>

            </View>
            {/* terms and condition */}
            <View style={{ width: 257, height: 21, position: 'absolute', top: 669, left: 32, borderColor: 'black', flexDirection: 'row' }}>
                {/* Checkbox */}
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

            {/* button */}
            <CustomBtn style={{ position: 'absolute', top: 714, height: 61 }} title={"Sign Up"} action={handleAction} />

            {/* footerImage    */}

            <View style={{ width:311, height:458, position:'absolute', top:741, left:Dimensions.get('window').width*0.40 , zIndex:-1 }}>
                <Image source={footer_img} resizeMode={'contain'}  />
             </View>

              {/* footer text   */}
              <TouchableOpacity onPress={()=> router.navigate('/(tabs)/sign-in')} style={{width:246 , height:21 , position:'absolute', top:805, left:91, flexDirection:'row'}}>
            <Text style={{fontWeight:'500', fontSize:14 , lineHeight:21, color:'#000000B2', textAlign:'right'}}>
            Already have an account?
            </Text>
            <Text style={{textDecorationLine:'underline', fontWeight:'700', fontSize:14 , lineHeight:21, color:'#000000', textAlign:'right'}}> Sign In</Text>

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
        width: 288,
        height: 94,

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
        lineHeight: 16.36,
        fontWeight: '500',
        color: '#808080',

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


export default SignUpScreen;