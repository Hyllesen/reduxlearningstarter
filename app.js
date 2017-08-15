import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Button } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.onPressIncrement = this.onPressIncrement.bind(this);
    this.onPressDecrement = this.onPressDecrement.bind(this);
    this.onPressClear = this.onPressClear.bind(this);
  }

  onPressIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  onPressDecrement() {
    this.setState({ count: this.state.count - 1 });
  }

  onPressClear() {
    this.setState({ count: 0 });
  }

  render() {
    const { container, countViewStyle, welcome } = styles;
    return (
      <View style={container}>
        <View style={countViewStyle}>
          <Button onPress={this.onPressIncrement} title="+" />
          <Text style={welcome}>
            {this.state.count}
          </Text>
          <Button onPress={this.onPressDecrement} title="-" />
        </View>
        <Button onPress={this.onPressClear} title="Clear" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  countViewStyle: {
    flexDirection: "row"
  }
});
