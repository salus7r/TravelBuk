import { AppRegistry } from "react-native";
import React from "react";
import App from "./app/app";
import { expo } from "./app/app.json";
import { Provider } from "react-redux";

import store from "./app/redux/config/store";

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

// AppRegistry.registerComponent("travelBuk", () => App);
AppRegistry.registerComponent(expo.name, () => RNRedux);
