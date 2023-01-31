import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Checkbox from "expo-checkbox";

const ContactMe = ({navigation}) => {
  const [agree, setAgree] = useState(false);  // this will be used in the checkbox state means if original state is presnt then leave it as it is and if state of button is changed when checkbox is clicked 

  // creating a state to get data entered by user
  const[userName,setUserName] =  useState('');
  console.log(userName)
  const[password,setPassword] =  useState('');


  // validation in rect native
  const submit =()=>{
    // return Alert.alert(userName,password)
    if(userName === 'rahul' && password === 'singh'){
      Alert.alert(`Thank You ${userName}`)
      navigation.navigate('Home', {myName :`${userName}`})     /// we can pass many paremeter in the props segement to access the data
    }else{
      Alert.alert(`username and password are incorrect`)
    }
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>LoginForm</Text>
      <Text style={styles.descripttion}>
        You can reach us anytime at Rahul@gmail.com
      </Text>

      {/* input container 1  */}
      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter Your name </Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={userName}    // user kya likh raha hai
          onChangeText={(actualData) => setUserName(actualData)}   /// user ne jo likha wo update kardo
          />
      </View>

      {/* input container 2 */}
      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter Your Password </Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}   ///to prevent auto completion
          secureTextEntry={true}  /// this is for password format
          value={password}
          onChangeText={(actualData) => setPassword(actualData)}
        />
      </View>

      {/* checkbox starts from here */}
      <View style={styles.wrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}   // if button is clicked then color will be chabged or else it is undefined(as it is)
        />
        <Text style={styles.wrapperText}>I have read T&C</Text>
      </View>

      {/* checkbox ends here */}


{/* this is used to create a touchable button */}
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          { backgroundColor: agree ? "#4630EB" : "grey" },
        ]}
        disabled={!agree}  // button is cannot be clicked till the checkbox is checked
        onPress={() =>{
          // Alert.alert('button is pressed')
          submit()
        }}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 25,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
    // fontFamily:'bold',
  },
  descripttion: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    // fontFamily:'regular'
  },
  inputStyle: {
    borderWidth: 1.5,
    borderColor: "#20262E",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    // fontFamily:'regular',
    fontSize: 18,
  },
  
buttonText:{
  textAlign:'center'
},
buttonStyle:{
  borderRadius: 5,
  paddingVertical: 10,
  paddingHorizontal: 18,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginVertical: 30,
},
wrapper:{
  display: "flex",
  flexDirection: "row",
  marginTop: 20,
  // fontFamily: "WorkSans_400Regular",
},
wrapperText:{
  marginLeft: 10,
    color: "#7d7d7d",
    // fontFamily: "WorkSans_400Regular",
}
});

export default ContactMe;
