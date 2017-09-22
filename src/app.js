import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, TextInput, View, Button } from "react-native";
import { connect } from 'react-redux';
import { counterIncrement, counterDecrement, counterClear, counterSet, helloAction } from './actions';

class App extends Component {

  constructor(props) {
    super(props);
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(number) {
    const count = parseInt(number);
    this.props.counterSet(count);
  }

  render() {
    console.log(this.props);    
    const { container, countViewStyle, welcome } = styles;
    const { helloText, pressedButton } = this.props.hello;
    return (
      <View style={container}>
          <TextInput          
            style={{width: 40, height: 40, borderWidth: 1}}
            onChangeText={this.onChangeText}
            value={this.props.count.toString()}
           />
        <View style={countViewStyle}> 
          <Button onPress={this.props.counterIncrement} title="+" />
          <Text style={welcome}>
            {this.props.count}
          </Text>
          <Button onPress={this.props.counterDecrement} title="-" />
        </View>
        <Button onPress={this.props.counterClear} title="Clear" />
        <Text>
          {helloText}
        </Text>
        <Text>
          Did you press the button ? {pressedButton.toString()}
        </Text>
        <Button onPress={this.props.helloAction} title="Show me the magic" />
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

function mapStateToProps(state) {
  return {
    count: state.counter,
    hello: state.hello
  };
}

export default connect(mapStateToProps, { counterIncrement, counterDecrement, counterClear, counterSet, helloAction })(App);