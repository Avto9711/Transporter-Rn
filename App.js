import React, {Component} from 'react';
import {StyleSheet,StatusBar, Text, View} from 'react-native';

import  Login from './src/pages/Login'


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#0069c0" barStyle="ligth-content" />
        <Login />
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor : "#2196f3",
    flex: 1,
    alignItems: "center",
    justifyContent:"center"
  }
});
