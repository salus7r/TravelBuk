import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { RkTheme } from "react-native-ui-kitten";
import { StackActions, NavigationActions } from "react-navigation";
import { ProgressBar } from "../../components";
import { KittenTheme } from "../../config/theme";
import { scale } from "../../utils/scale";
import NavigationType from "../../config/navigation/propTypes";

import SplashWallpaper from "./splashWallpaper";
import SplashLogo from "./splashLogo";

const delay = 500;

export class SplashScreen extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired
  };
  state = {
    progress: 0
  };

  componentDidMount() {
    StatusBar.setHidden(true, "none");
    RkTheme.setTheme(KittenTheme);
    this.timer = setInterval(this.updateProgress, delay);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateProgress = () => {
    if (this.state.progress === 1) {
      clearInterval(this.timer);
      setTimeout(this.onLoaded, delay);
    } else {
      const randProgress = this.state.progress + Math.random() * 0.5;
      this.setState({ progress: randProgress > 1 ? 1 : randProgress });
    }
  };

  onLoaded = () => {
    StatusBar.setHidden(false, "slide");
    const toHome = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Home" })]
    });
    this.props.navigation.dispatch(toHome);
  };

  render = () => (
    <SplashWallpaper>
      <SplashLogo />
      <ProgressBar color={RkTheme.current.colors.accent} style={styles.progress} progress={this.state.progress} width={scale(320)} />
    </SplashWallpaper>
  );
}

const styles = StyleSheet.create({
  progress: {
    alignSelf: "center",
    marginBottom: 50,
    backgroundColor: "#e5e5e5"
  }
});
