import { View, Text, StyleSheet, Image, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react';
import header_img_1 from "../../../assets/images/welcome/logo(1).png";
import header_img_2 from "../../../assets/images/welcome/Maskgroup.png";
import Main_img from "../../../assets/images/welcome/logo.png";
import CustomBtn from '@/src/components/CustomBtn';
import { router } from 'expo-router';
const {width , height} = Dimensions.get('window')


const handleAction =()=>{
    router.navigate('/(tabs)/sign-in');
}

const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.headerImgContainer}>
    <Image style={styles.headerImgStyle} resizeMode={'cover'} source={header_img_1} />
    <Image  style={styles.headerImgStyle} resizeMode={'cover'} source={header_img_2} />
     </View>
    
     <Image style={styles.mainImg} resizeMode={'contain'} source={Main_img} />
    
     <Text style={styles.titleTxt}>{"Sparkle & Shine  Transform \nYour Drive with Every Wash!"}</Text>
    <CustomBtn style={{position:'absolute', top:735}} title={"Let's Start"} action={handleAction} />
    <View style={styles.footerTextContainer}>
    <Text style={styles.footerTxt}>Already  have an account?</Text>
    <TouchableOpacity onPress={()=> router.navigate('/(tabs)/sign-in')}>
    <Text style={[styles.footerTxt, {fontWeight:'bold', textDecorationLine:'underline'}]}>Sign in</Text>
    </TouchableOpacity>
    
    </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        

    },

    headerImgContainer:{
        flexDirection:'row', 
        justifyContent:'space-between',
        width:width,
       
       
     
    },

    headerImgStyle:{
        width:width*0.4,
        height:height*0.23,
        // borderWidth:1,
        // borderColor:'red'
       

    },
    mainImgContainer:{
        // borderWidth:1,
        position:'absolute',
        top:219
        
    },
    mainImg:{
        width:382,
        height:280,
        position:'absolute',
        top:219
    },
    titleTxt: {
        fontSize: width * 0.05,
        textAlign: 'center',
        fontWeight: '600',
        color: '#808080', 
        position:'absolute',
        top:581,
        lineHeight:36
    },
    footerTextContainer:{
        flexDirection:'row',
        position:'absolute',
        top:820,
        gap:5
        
    },
    footerTxt:{
        fontWeight:'500',
        color:'#000000B2',
        lineHeight:21
    }

})

export default Welcome;