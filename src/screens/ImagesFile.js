import React from 'react'
import { View,StyleSheet,Text,Image } from 'react-native'

// IMPORTANT note that always store static content that doesnot change its value in the assets folder

const ImagesFile = () => {
  return (
    <View style = {styles.listStyle}>
        <Text>Hello this is a image file section</Text>
        <Image  style = {styles.imageStyle}  source={require("../../assets/pexelscoding.webp")} />
        <Image  style = {styles.imageStyle}  source={require("../../assets/pexelcoding2.jpg")} />
        <Image  style = {styles.imageStyle}  source={require("../../assets/pexelscoding3.jpg")} />
        <Image  style = {styles.imageStyle}  source={require("../../assets/pexelscoding4.jpg")} />
        <Image  style = {styles.imageStyle}  source={require("../../assets/pexelscars.jpg")} />
    </View>
  )
}

const styles = StyleSheet.create({
    listStyle:{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
    },
    imageStyle:{
        width:250,
        height: 250,
    }

})

export default ImagesFile