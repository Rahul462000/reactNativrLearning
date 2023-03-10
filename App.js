// their are some set of rules for jsx part in the react native
// 1)WE can refer to js variable inside a JSX block by using curly braces
// 2) Always return JSX elements using () or grouping tags, never give the return value undefined
//3) we can assign JSX elements to a variable then we can show that variable inside a JSX block
//4) we can assemble different JSX elements like normal HTML using view
//5) any javascript expression will work between curly braces include function calls like {getFullname("tony" , "stark" )}

// importing libraries to create components
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomComponent from "./src/screens/CustomComponen";
import FirstChallenge from "./src/screens/FirstChallenge";
import FlatListDemo from "./src/screens/FlatListDemo";
import ImagesFile from "./src/screens/ImagesFile";
import OurButton from "./src/screens/OurButton";
import NetflixCard from "./src/Components/NetflixCard";
import MultipleStyles from "./src/screens/MultipleStyles";
import SecondChallenge from "./src/screens/SecondChallenge";
import FlexBox from "./src/screens/FlexBox";
import PositionAbsolute from "./src/screens/PositionAbsolute";
import CounterNumber from "./src/screens/hooks/CounterNumber";
import RandomColorGenerator from "./src/screens/RandomColorGenerator";
import ApiCalling from "./src/screens/hooks/ApiCalling";
import ContactMe from "./src/screens/ContactMe";
import HomeContactMe from "./src/screens/HomeContactMe";

//create a component that return some jsx or in simple words simple function
const App = () => {
// react navigation in react native
const Stack = createNativeStackNavigator();

  // const age = 12; //// first rule
  // const myEelement = <Text>Hello i am {age} year old!</Text>;

  // const getFullname = (firstName, secondName) => {
    /// here inside the brackets we have function parameters
  //   return `My name is ${firstName}  ${secondName}`;
  // };

  // second rule means inside curly brackets never leave it empty or whenever we return some jsx we need to put a curly openclosed brackets
  return (

    <NavigationContainer>
      {/* note: all screens inside stack.navigator will get a navigation prop by default */}
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen name="Login" component={ContactMe} />
        <Stack.Screen name="Home" component={HomeContactMe} />

      </Stack.Navigator>
    </NavigationContainer>

    // fourth rule is the view is used to render multiple JSX elements
    // <View>
      // {/* <Text style={styles.textStyle}>Hello everyone????From app.js!</Text> */}
      // {/* <CustomComponent /> */}
      // {/* third rule below */}
      // {/* {myEelement} */}
      // {/* below is the fifth rule */}
      // {/* <Text>Hi, {getFullname("tony", "stark")} </Text> */}
      // {/* <FirstChallenge /> */}


      // {/* flatlist using demo */}
      // {/* <FlatListDemo /> */}

      // {/* usage of images in react native */}
      // {/* <ImagesFile /> */}

      // {/* usage of button in react-native */}
      // {/* <OurButton /> */}

      // {/* making of netflix card */}
      // {/* <NetflixCard /> */}

      // {/* how to  add multiply style (common styles) in one style component */}
      // {/* <MultipleStyles/> */}

      // {/* second challenge */}
      // {/* <SecondChallenge /> */}

      // {/* flexbox usage in react native */}
      // {/* <FlexBox /> */}

      // {/* positionabsolute in reactnative */}
      // {/* <PositionAbsolute /> */}

      // {/* useState hooks usage in react native */}
      // {/* <CounterNumber /> */}

      // {/* random color generator game  */}
      // {/* <RandomColorGenerator /> */}

      // {/* useEffect hook and api inplementation */}
      // {/* <ApiCalling /> */}

      // {/* forms in reactnative */}
      // <ContactMe />
      
    // </View>
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
