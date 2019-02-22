import React, {Component,Provider} from 'react';
import {StyleSheet,StatusBar, Text, View, TouchableOpacity} from 'react-native';
import {createAppContainer,createStackNavigator} from 'react-navigation'

import  Login from './src/pages/Login'
import RegistrationForm from './src/pages/RegistrationForm'
import  InitialPage from './src/pages/InitialPage'

const AppNavigator = createStackNavigator({
  AppWrapper: {
      screen:  AppWrapper,
      navigationOptions: ({ navigation }) => ({
        header: null,
      })
  },
  RegistrationFormPage: {
    screen: RegistrationForm,
    navigationOptions: ({ navigation }) => ({
      title: "Register",
      headerTintColor:'white',
      headerStyle:{
        backgroundColor:'#0069c0'
      }
    }),
  },
  InitialPage : {
    screen: InitialPage,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  LoginPage : {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  }
},{
  initialRouteName: "AppWrapper",
  
})



const AppContainer = createAppContainer(AppNavigator)


function AppWrapper(){
  return (
      <View style={{flex:1}}>
        <StatusBar backgroundColor="#0069c0" barStyle="ligth-content" />
        <InitialPage/>
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

