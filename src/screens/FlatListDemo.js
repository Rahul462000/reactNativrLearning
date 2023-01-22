import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

//  a FlatList in react native is a method just like the .map() method in react to show all the items from an array
const FlatListDemo = () => {
  const name = [
    {
      index: "1",
      name: "rahul",
    },
    {
      index: "2",
      name: "singh",
    },
    {
      index: "3",
      name: "technical",
    },
    {
      index: "4",
      name: "mechanical",
    },
    {
      index: "5",
      name: "dev",
    },
    {
        index: "6",
        name: "cars",
      },
      {
        index: "7",
        name: "bike",
      },
      {
        index: "8",
        name: "football",
      },
  ];

  return (
    // <FlatList data={name} renderItem={(element)=>{  /// old version
    // now using destructuring function
    // this method is used to get all data from the array for unique identification we use keyExtractor
    <FlatList
    style={styles.listStyle}
      keyExtractor={(key) => {
        return key.index;
      }}

    //   horizontaly scrolling like netflix
    horizontal
    inverted  // it will make the apperance of the data from last to first
    // numColumns={2}   // for how many columns to show in page
    // showsHorizontalScrollIndicator={false}   /// it will prevent the slider to show in horizontally scrolling
      data={name}
      renderItem={({ item }) => {
        console.log(item.name);
        // usage of flatlist below here
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding:20,
    backgroundColor:'green',
    margin:2,
    color: 'white',
  },
  listStyle:{
    textAlign: 'center',
    margin:20,
    padding:20,
  }
});

export default FlatListDemo;
