import { AppRegistry } from "react-native";
import React from 'react';
import { Provider } from 'react-redux';
import App from "./src/app";

const AppContainer = () => 
    <Provider>
        <App/>
    </Provider>;

AppRegistry.registerComponent("reduxlearningstarter", () => AppContainer);
