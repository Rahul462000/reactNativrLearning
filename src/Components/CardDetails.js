import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

// IMPORTANT note that always store static content that doesnot change its value in the assets folder
// and this complete below method is used to call the image in the react native
// her we also have done the destructuring of the props
const CardDetails = ({textData,ImgSrc}) => {
  return (
    <View style={styles.listStyle}>
      <Text>{textData}</Text>
      <Image
        style={styles.imageStyle}
        source={ImgSrc}
        // source={require("../../assets/pexelscoding.webp")} /// old method
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    // display:'flex',
    // justifyContent:'center',
    // alignItems: 'center',
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
});

export default CardDetails;
