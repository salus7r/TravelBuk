import React from "react";
import { StyleSheet, ImageBackground } from "react-native";

export default class SplashWallpaper extends React.Component {
  render() {
    return (
      <ImageBackground style={styles.picture} source={require("../../assets/images/splashBack.png")}>
        {this.props.children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  }
});
