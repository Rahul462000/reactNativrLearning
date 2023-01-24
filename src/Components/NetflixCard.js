import React from "react";
//Linking is a library used in react native for usage of the links in the button
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Linking,
} from "react-native";
import { useFonts,Inter_900Black,Inter_800ExtraBold,Inter_300Light} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";



const NetflixCard = () => {

  // note jab tak fonts nahi aajate tab tak kuch nhi display nahi karna hai
let [fontsLoad] = useFonts({
  Inter_900Black,
  Inter_800ExtraBold,
  Inter_300Light
});


// this is a method where the app will be loaded after the font is loaded
if(!fontsLoad){
  return <AppLoading />
}else{
  return (
    <View style={styles.container}>
      <Text style={styles.header}>netflix card</Text>
      <View style={styles.poster}>
        <Image
          style={styles.imgStyle}
          // source={{uri:"https://unsplash.com/photos/FcyipqujfGg"}}  // this is a method where we can provide image url through external web resource
          source={require("../../assets/pexelscars.jpg")} // this is a internal image url resource
        />
        <View style={styles.poster_info}>
          <Text style={styles.poster_title}>Dodge Carger</Text>
          <Text style={styles.poster_text}>The Dodge Charger is a model of automobile marketed by Dodge in various forms over seven generations since 1966.</Text>
        </View>
        <Button
          title="Watch now"
          onPress={() => {
            console.log("button is clicked");
            Linking.openURL("https://youtube.com");
          }}
        />
      </View>
    </View>
  );
}
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom:50
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
    fontFamily:'Inter_300Light',
    color:'rgb(255,0,0)',
    textTransform:'capitalize',
    // fontVariant:['small-caps'],  // not working
  },
  poster: {
    width: 250,
    borderWidth: 1.5,
    alignItems: "center",
    borderColor: "red",
  },
  poster_info: {
    alignItems: "center",
    marginVertical: 10,
  },
  poster_title: {
    fontSize: 20,
    marginBottom: 10,
    textShadowColorOffset:{width: -1, height: 1},
    textShadowRadious:10,
    textShadowColor:'rgb(0,0,0,0.75)',
    textTransform:'capitalize',
  },
  poster_text: {
    color: "#999",
    paddingHorizontal: 20,
    marginBottom: 10,
    textAlign: "center",
    lineHeight:22
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
