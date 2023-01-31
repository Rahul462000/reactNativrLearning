import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const HomeContactMe = ({ route, navigation }) => {
  // accessing the name passeed in props
  const { myName } = route.params; /// waise to params.myName hota hai but humne yaha per object ke from mein myName mein value pass ki hai
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Welcome {myName}</Text>
      <Button title="Go Back"
        onPress={() => navigation.goBack()}     /// it will take user back to login page when the back button is clicked
        /> 

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainHeader: {
    fontSize: 35,
    color: "#4c5dab",
    marginTop: 0,
    textTransform: "capitalize",
  },
});

export default HomeContactMe;
