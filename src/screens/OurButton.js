import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  TextComponent,
  Image,
} from "react-native";

const OurButton = () => {
  return (
    <View>
      <Text style={styles.buttonStyle}>Click ME</Text>
      <Button
        title="Subscribe Now"
        // onPress={()=>{'console.log(sybscribe to daily dev')}}   // console.log() msg for getting the data after btn is presed
        onPress={() => {
          Alert.alert("Button is pressed");
        }} // in onPress method callback function is compulsory
      />

      {/* usage of touchable opacity */}
      {/* NOTE in tochable opactiy we can create anything to work as a button eg. a image a normal text a flatlist */}
      <TouchableOpacity
        onPress={() => {
          console.log("subscribe to rahul tech");
          Alert.alert("car picture is clicked");
        }}
      >
        <Text>Hello everyone</Text>
        <Image
          style={styles.imageStyle}
          source={require("../../assets/pexelscars.jpg")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 200,
    textAlign: "center",
    fontSize: 20,
  },
  imageStyle: {
    width: 150,
    height: 100,
  },
});

export default OurButton;
