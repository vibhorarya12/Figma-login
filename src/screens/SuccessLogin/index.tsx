import { View, Text, StyleSheet, SafeAreaView , Image} from 'react-native'
import React from 'react';
import Main_img from "../../../assets/images/welcome/logo.png";
import CustomBtn from '@/src/components/CustomBtn';
import { useLocalSearchParams } from 'expo-router';

const SuccessLogin = () => {
 const handleAction = ()=>console.log("helo");
 const { name } = useLocalSearchParams();

  return (
   <SafeAreaView style={styles.container}>
    <Image style={styles.mainImg} source={Main_img} />
    <View style={{ position:'absolute',top:344, left:67,  justifyContent:'center'}}>
    <Text style={{fontSize:32, fontWeight:'700', alignSelf:'center',textAlign:'center' }}>{`Welcome ${name}`}</Text>
    </View>
    <CustomBtn style={{ position: 'absolute', top: 579, height: 61 }} title={"Logout"} action={handleAction} />

   </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'

    },
    mainImg: {
        width: 233,
        height: 170,
        top: 50,
        position: 'absolute'
    },
})

export default SuccessLogin;