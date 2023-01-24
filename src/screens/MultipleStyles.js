import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const MultipleStyles = () => {
  return (
    <View>
        <View style={styles.parentView}>
            {/* below here is the to add mulitple style */}
        <Text style={[styles.childText, styles.commomStyle]}>Box Model RN</Text>
        <Text style={[styles.childText2, styles.commomStyle]}>Box Model RN</Text>
        <Text style={[styles.childText3, styles.commomStyle]}>Box Model RN</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    parentView:{
        width:'95%',
        marginTop:100,
        marginHorizontal:10,
        borderWidth:3,
        borderColor:'red'

    },
    childText:{
        backgroundColor:'#97BC62FF',
        borderColor:"#2C5F2D",
        color:'#2C5F2D',
        marginTop:30,
    },
    childText2:{
        backgroundColor:'#D4B996FF',
        borderColor:'#A07855FF',
        color:"#A07855FF",
        
    },
    childText3:{
        backgroundColor:'#9CC3D5FF',
        borderColor:'#0063B2FF',
        color:'#0063B2FF',
    },
// below style will be used to put all common style in the style comopnent
    commomStyle:{
        fontSize:20,
        paddingVertical:30,
        textAlign:'center',
        borderWidth:5,
        marginBottom:30,
        marginHorizontal:50,
    }
})

export default MultipleStyles


// box model notes 
// padding is used to create a room in the box  or box ke ander space need hai
//in react native we use padding verticle for aligning object in perfect alignment from top and bottom
//border width is used to create a boundry line for your object 
//border color to make your border color change
//margin is used to create space between the inner object  example margin top bottom left right
// but here we use margin horizontal for left and right side spacing and for top and bottom margin spacinf we use margin verticle