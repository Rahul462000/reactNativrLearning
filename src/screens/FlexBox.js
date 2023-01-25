import React from "react";
import { Text, View, StyleSheet } from "react-native";


// flex direction property will only work with parent elements not with child elements
const FlexBox = () => {
  return (
    <View>
      <View style={styles.parentView}>
        <Text style={[styles.childText, styles.commonStyle]}>Box 1</Text>
        <Text style={[styles.childText2, styles.commonStyle]}>Box 2</Text>
        <Text style={[styles.childText3, styles.commonStyle]}>Box 3</Text>
        <Text style={[styles.childText4, styles.commonStyle]}>Box 4</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    width: "95%",
    height: 500,
    marginTop: 100,
    marginHorizontal: 10,
    borderWidth: 3,
    borderColor:'red',
    backgeoundColor: "aliceblue",
    flexDirection:'row', // by default cloumn menin rehta hai but in case for row we have to mentioned it here
    // flexDirection:'row-reverse', // make the row value in reverse direction
    // justifyContent: 'center', // it will work horizontally when flex direction is in row and if flex direction is column by defalut it willl work vertically
    // justifyContent:'flex-start',   // by default value in vertical direction
    // justifyContent: 'flex-end', // work in  horizontal direction and put it in bottom 
    // justifyContent:'space-between',  // provide a good space between the elements
    justifyContent:'space-around',  // provide a good space between the elements
    // justifyContent:'space-evenly',  // provide a good space between the elements as flex direction is row it will work in horizontal direction other wise in verticle direction
    alignItems: 'center', // it will work with justifyContent value is center with flex direction value is cloumn by default
    // alignItems:'flex-start', // align items in start corner position
    // alignItems:'flex-end', // align items in end corner position
    // alignItems:'stretch' // it will stretch the width of the container

  },
  childText: {
    backgroundColor: "#97BC62FF",
    borderColor: "2C5F2D",
    color: "#2C5F2D",
    // flex : 1,    // it will utilised the available space in the container
  },
  childText2: {
    backgroundColor: "#D4B996FF",
    borderColor: "#A07858FF",
    color: "#A07858FF",
  },
  childText3:{
    backgroundColor:'#9CC3D5FF',
    borderColor:'#0063B2FF',
    color:'#0063B2FF',
    // alignSelf:'flex-start',  // it will direct only a particular element and make go on top
    // alignSelf:'stretch'    // it will stretch the element but only if height is not mentioned in the parent component 
},
  childText4: {
    backgroundColor: "#97BC62FF",
    borderColor: "#00203FFF",
    color: "#00203FFF",
  },
  commonStyle:{
    width:60,
    height:60,
    fontSize:20,
    borderWidth:1,
  }
});

export default FlexBox;
