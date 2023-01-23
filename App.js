// their are some set of rules for jsx part in the react native
// 1)WE can refer to js variable inside a JSX block by using curly braces
// 2) Always return JSX elements using () or grouping tags, never give the return value undefined
//3) we can assign JSX elements to a variable then we can show that variable inside a JSX block
//4) we can assemble different JSX elements like normal HTML using view
//5) any javascript expression will work between curly braces include function calls like {getFullname("tony" , "stark" )}

// importing libraries to create components
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import CustomComponent from "./src/screens/CustomComponen";
import FirstChallenge from "./src/screens/FirstChallenge";
import FlatListDemo from "./src/screens/FlatListDemo";
import ImagesFile from "./src/screens/ImagesFile";
import OurButton from "./src/screens/OurButton";
import NetflixCard from "./src/Components/NetflixCard";

//create a component that return some jsx or in simple words simple function
const App = () => {
  // const age = 12; //// first rule
  // const myEelement = <Text>Hello i am {age} year old!</Text>;

  // const getFullname = (firstName, secondName) => {
    /// here inside the brackets we have function parameters
  //   return `My name is ${firstName}  ${secondName}`;
  // };

  // second rule means inside curly brackets never leave it empty or whenever we return some jsx we need to put a curly openclosed brackets
  return (

    // fourth rule is the view is used to render multiple JSX elements
    <View>
      {/* <Text style={styles.textStyle}>Hello everyone😉From app.js!</Text> */}
      {/* <CustomComponent /> */}
      {/* third rule below */}
      {/* {myEelement} */}
      {/* below is the fifth rule */}
      {/* <Text>Hi, {getFullname("tony", "stark")} </Text> */}
      {/* <FirstChallenge /> */}


      {/* flatlist using demo */}
      {/* <FlatListDemo /> */}

      {/* usage of images in react native */}
      {/* <ImagesFile /> */}

      {/* usage of button in react-native */}
      {/* <OurButton /> */}

      {/* making of netflix card */}
      <NetflixCard />
      
    </View>
  );
};

//create a StyleSheet to style the component
const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    marginTop: 20,
  },
});

// export the file, so that we can use it elsewhere in our app
export default App;
