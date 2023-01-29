import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";

// here we are using useEffect and implementation of api

const ApiCalling = () => {
  const [myUserData, setMyUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const myData = await response.json();
      setIsLoading(false);
      setMyUserData(myData);
      console.log(myData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <View style={styles.mainContain}>
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View>
          <FlatList
            data={myUserData}
            renderItem={({ item }) => {
              return (
                <View style={styles.card}>
                  <View style={styles.imgContainer}>
                    <Image
                      style={styles.imgStyle}
                      resizeMode="cover"
                      source={{ uri: item.image }}
                    />
                  </View>
                  <View>
                    <View style={styles.bioDataContainer}>
                      <Text style={styles.bioData}>Bio-Data</Text>
                      <Text style={styles.idNumber}>{item.id}</Text>
                    </View>

                    <View style={styles.mainContain}>
                      <Text style={styles.myName}>{item.name}</Text>
                      <Text style={styles.myName}>{item.email}</Text>
                      <Text style={styles.myName}>{item.mobile}</Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainContain: {
    width: "100%",
    paddingTop: 50,
    backgroundColor: "#b696d7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginVertical: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  bioDataContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#353535",
    paddingVertical: 10,
    // fontFamily:''
  },
  idNumber: {
    fontSize: 20,
    color: "rgba(255,255,255,0.5)",
  },
  bioData: {
    fontSize: 30,
    color: "#fff",
  },
  mainHeader: {
    fontSize: 30,
    color: "#fff",
  },
  imgContainer: {
    padding: 10,
  },
});

export default ApiCalling;
