import React from "react";
import { Text, View, StyleSheet } from "react-native";

const PositionAbsolute = () => {
  return (
    <View>
      <View style={styles.parentView}>
        <Text style={[styles.childText, styles.commonStyle]}>Box 1</Text>
        <Text style={[styles.childText2, styles.commonStyle]}>Box 2</Text>
        <Text style={[styles.childText3, styles.commonStyle]}>Box 3</Text>
        <Text style={[styles.childText4, styles.commonStyle]}>Box 4</Text>
        {/* a trick to make 5th box in complete center position */}
        <View style={styles.SubParentView}>
          <Text style={[styles.childText5, styles.commonStyle]}>Box 5</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    width: "95%",
    height: 500,
    marginTop: 100,
    marginHorizontal: 10,
    borderWidth: 3,
    borderColor: "red",
    backgeoundColor: "aliceblue",
    position: "relative",
  },

  SubParentView: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  childText: {
    backgroundColor: "#97BC62FF",
    borderColor: "2C5F2D",
    color: "#2C5F2D",
  },
  childText2: {
    backgroundColor: "#D4B996FF",
    borderColor: "#A07858FF",
    color: "#A07858FF",
    right: 0,
  },
  childText3: {
    backgroundColor: "#9CC3D5FF",
    borderColor: "#0063B2FF",
    color: "#0063B2FF",
    bottom: 0,
    right: 0,
  },
  childText4: {
    backgroundColor: "#97BC62FF",
    borderColor: "#00203FFF",
    color: "#00203FFF",
    bottom: 0,

  },
  childText5: {
    backgroundColor: "#97BC62FF",
    borderColor: "#00203FFF",
    color: "#00203FFF",
    alignSelf: "center",
  },

  commonStyle: {
    width: 60,
    height: 60,
    fontSize: 20,
    borderWidth: 1,
    position: "absolute",
  },
});

export default PositionAbsolute;
