import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

import logoImg from "../../assets/images/logo.png";

export default class SplashLogoWithoutText extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logoImg} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 100,
    height: 100
  }
});
