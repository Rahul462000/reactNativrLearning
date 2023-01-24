import React from "react";
//Linking is a library used in react native for usage of the links in the button
import { Text, StyleSheet, FlatList, View } from "react-native";

const SecondChallenge = () => {
  // creating a flatlist for storing the data for netflix cards
  const netFlixSeries = [
    {
      name: "Siliconvalley",
      year: 2014,
      creator: "Mike Judge, John Altschuler and Dave Krinsky",
      Genre: "Comedy, Action,Sci-Fi",
    },
    {
      name: "rush hour",
      year: 2014,
      creator: "Mike Judge, John Altschuler and Dave Krinsky",
      Genre: "Comedy, Action,Sci-Fi",
    },
    {
      name: "rush hour2",
      year: 2014,
      creator: "Mike Judge, John Altschuler and Dave Krinsky",
      Genre: "Comedy, Action,Sci-Fi",
    },
    {
      name: "rush hour3",
      year: 2014,
      creator: "Mike Judge, John Altschuler and Dave Krinsky",
      Genre: "Comedy, Action,Sci-Fi",
    },
  ];
  return (
    <View>
      <Text style={styles.headingStyle}>list of favourite list on netflix</Text>
      <FlatList
        keyExtractor={(key) => {
          return key.name;
        }}
        style={styles.listStyle}
        data={netFlixSeries}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          console.log(item.name);
          return (
            <View style={styles.viewStyle}>
              <Text style={styles.textStyles}> {item.name}</Text>
              <Text style={styles.textStyles}> {item.creator}</Text>
              <Text style={styles.textStyles}> {item.Genre}</Text>
              <Text style={styles.textStyles}> {item.year}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    margin: 20,
    padding: 5,
  },
  textStyles: {
    color: "white",
    fontSize: 30,
    backgroundColor: "#009688",
    textAlign: "center",
    textTransform: "capitalize",
    padding: 5,
  },
  viewStyle: {
    padding: 5,
    margin: 20,
  },
  headingStyle: {
    margin:30,
    fontSize: 20,
    textTransform: "capitalize",
    textAlign: "center",
  },
});

export default SecondChallenge;
