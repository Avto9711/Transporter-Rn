import React, {Component,Provider} from 'react';
import {StyleSheet,StatusBar, Text, View} from 'react-native';
import {createAppContainer,createStackNavigator} from 'react-navigation'

import  Login from './src/pages/Login'
import RegistrationForm from './src/pages/RegistrationForm'

const AppNavigator = createStackNavigator({
  AppWrapper: {
      screen:  AppWrapper
  },
  RegistrationFormPage: {
    screen: RegistrationForm
    
  }
},{
  initialRouteName: "AppWrapper",
  headerMode: "none"
})



const AppContainer = createAppContainer(AppNavigator)


function AppWrapper(){
  return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#0069c0" barStyle="ligth-content" />
        <Login/>
      </View>)
}
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
     
        <AppContainer/>
     
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
