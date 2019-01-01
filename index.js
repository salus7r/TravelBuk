import { AppRegistry } from "react-native";
import React from "react";
import App from "./app/app";
import { expo } from "./app/app.json";
import { Provider } from "react-redux";

AppRegistry.registerComponent("travelBuk", () => App);

import configureStore from "./store";

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(expo.name, () => RNRedux);
