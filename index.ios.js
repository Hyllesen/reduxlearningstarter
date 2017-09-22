import { AppRegistry } from "react-native";
import React from 'react';
import { Provider } from 'react-redux';
import App from "./src/app";
import { createStore } from 'redux';
import reducers from './src/reducers';

const store = createStore(reducers);

const AppContainer = () => 
    <Provider store={store}>
        <App/>
    </Provider>;

AppRegistry.registerComponent("reduxlearningstarter", () => AppContainer);
