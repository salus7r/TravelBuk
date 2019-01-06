import React from "react";
import { View, Keyboard } from "react-native";
import { RkButton, RkText, RkTextInput, RkAvoidKeyboard, RkStyleSheet, RkTheme } from "react-native-ui-kitten";
import { FontAwesome } from "../../assets/icons";
import { GradientButton } from "../../components/gradientButton";
import { scaleModerate, scaleVertical } from "../../utils/scale";
import NavigationType from "../../config/navigation/propTypes";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { KittenTheme } from "../../config/theme";

import SplashWallpaper from "../other/splashWallpaper";
import SplashLogoWithoutText from "../other/splashLogoWithoutText";

export class LoginV1 extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    navigation: NavigationType.isRequired
  };
  static navigationOptions = {
    header: null
  };

  onLoginButtonPressed = () => {
    debugger;
    this.props.navigation.goBack();
  };

  onSignUpButtonPressed = () => {
    this.props.navigation.navigate("SignUp");
  };

  render = () => (
    <SplashWallpaper>
      <RkAvoidKeyboard onStartShouldSetResponder={() => true} onResponderRelease={() => Keyboard.dismiss()}>
        <SplashLogoWithoutText />
        <View style={styles.container}>
          <View style={styles.buttons}>
            <RkButton style={styles.button} rkType="social">
              <RkText rkType="awesome hero accentColor">{FontAwesome.twitter}</RkText>
            </RkButton>
            <RkButton style={styles.button} rkType="social">
              <RkText rkType="awesome hero accentColor">{FontAwesome.google}</RkText>
            </RkButton>
            <RkButton style={styles.button} rkType="social">
              <RkText rkType="awesome hero accentColor">{FontAwesome.facebook}</RkText>
            </RkButton>
          </View>
          <RkTextInput rkType="rounded" placeholder="Username" />
          <RkTextInput rkType="rounded" placeholder="Password" secureTextEntry />
          <GradientButton style={styles.save} rkType="large" onPress={this.onLoginButtonPressed} text="LOGIN" />
          <View style={styles.footer}>
            <View style={styles.textRow}>
              <RkText style={styles.dontHaveAccountText} rkType="primary3">
                Don’t have an account?
              </RkText>
              <RkButton rkType="clear">
                <RkText style={styles.signUpText} rkType="header6" onPress={this.onSignUpButtonPressed}>
                  Sign up now
                </RkText>
              </RkButton>
            </View>
          </View>
        </View>
      </RkAvoidKeyboard>
    </SplashWallpaper>
  );
}

const styles = RkStyleSheet.create(theme => ({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  container: {
    paddingHorizontal: 17,
    paddingBottom: scaleVertical(22),
    alignItems: "center"
  },
  footer: {
    alignSelf: "center",
    marginBottom: 50
  },
  buttons: {
    flexDirection: "row",
    marginBottom: scaleVertical(24)
  },
  button: {
    marginHorizontal: 14
  },
  save: {
    alignSelf: "center",
    marginBottom: 50,
    marginVertical: 9
  },
  textRow: {
    justifyContent: "center",
    flexDirection: "row"
  },
  dontHaveAccountText: {
    fontSize: 18,
    fontWeight: "400",
    color: "white"
  },
  signUpText: {
    fontSize: 18,
    fontWeight: "500",
    color: KittenTheme.colors.accent
  }
}));
