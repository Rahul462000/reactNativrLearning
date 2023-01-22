import React from "react";
//Linking is a library used in react native for usage of the links in the button
import { View, Text, StyleSheet, Image, Button,Linking } from "react-native";

const NetflixCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>This is a netflix card</Text>
      <View style={styles.poster}>
        <Image
          style={styles.imgStyle}
          source={{uri:"https://unsplash.com/photos/FcyipqujfGg"}}  // this is a method where we can provide image url through external web resource
        //   source={require("../../assets/pexelscars.jpg")} // this is a internal image url resource
        />
      <View style={styles.poster_info}>
        <Text style={styles.poster_title} >Dodge Carger</Text>
        <Text style={styles.poster_text} >american muscle</Text>
      </View>
      <Button title="Watch now"  onPress={()=>Linking.openURL('https://youtube.com')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
  },
  poster: {
    width: 250,
    borderWidth: 1.5,
    alignItems: "center",
    borderColor:'red'
  },
  poster_info: {
    alignItems: "center",
    marginVertical: 10,
  },
  poster_title:{
    fontSize:20,
    marginBottom:10
  },
  poster_text: {
    color: "#999",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  imgStyle: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  buttonStyle: {
    borderWidth: 0,
    borderRadius: 20,
  },
});

export default NetflixCard;
