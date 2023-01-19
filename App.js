// importing libraries to create components
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import CustomComponent from "./src/screens/CustomComponen";

//create a component that return some jsx or in simple words simple function
const App = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Hello everyone😉From app.js!</Text>
      <CustomComponent />
    </View>
  )
};

//create a StyleSheet to style the component
const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    marginTop: 200,
  },
});

// export the file, so that we can use it elsewhere in our app
export default App;
