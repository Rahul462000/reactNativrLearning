import React from 'react'
import { Text, StyleSheet, View } from 'react-native'


const FirstChallenge = () => {
    const getElement = "RAhul SIngh"
  return (
    <View>
        <Text style ={styles.textStyle}>Hello welcome to Rahul's tech</Text>
        <Text style ={styles.texttStyle}>we like reactNative😄</Text>
        <Text style ={styles.element}>Hi😎 I am {getElement}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle:{
        color: 'blue',
        fontsize: 40
    },
    texttStyle:{
        fontSize: 30,
        color: 'yellow'
    },
    element:{
        color: '#FFB100',
        fontSize:30,
    }
})

export default FirstChallenge