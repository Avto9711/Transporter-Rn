import React, {Component,Provider} from 'react';
import {StyleSheet,StatusBar, Text, View, TouchableOpacity} from 'react-native';
import {createAppContainer,createStackNavigator} from 'react-navigation'
import globalColors from './src/utils/colors';
import Screens, {AuthStack} from './src/utils/screens'
import  Login from './src/pages/Login'
import RegistrationForm from './src/pages/RegistrationForm'
import  InitialPage from './src/pages/InitialPage'
import  ForgotPassword from './src/pages/ForgotPassword'


const AppAuthNavigator = createStackNavigator({
  AppWrapper: {
      screen:  AppWrapper,
      navigationOptions: ({ navigation }) => ({
        header: null,
      })
  },
  [AuthStack.RegistrationFormPage]: {
    screen: RegistrationForm,
    navigationOptions: ({ navigation }) => ({
      title: "Register",
      headerTintColor:globalColors.white,
      headerStyle:{
        backgroundColor:globalColors.baseBlue
      }
    }),
  },
  [AuthStack.InitialPage] : {
    screen: InitialPage,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  [AuthStack.LoginPage] : {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  [AuthStack.ForgotPassword]:{
      screen:ForgotPassword,
      navigationOptions: ({ navigation }) => ({
        title: "Recover Password",
        headerTintColor:globalColors.white,
        headerStyle:{
          backgroundColor:globalColors.baseBlue
        }
      }),
  }
},{
  initialRouteName: "AppWrapper",
  
})



const AppContainer = createAppContainer(AppAuthNavigator)


function AppWrapper(){
  return (
      <View style={{flex:1}}>
        <StatusBar backgroundColor={globalColors.baseBlue} barStyle="ligth-content" />
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

