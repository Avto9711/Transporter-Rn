import React, {Component, applyMiddleware, compose } from 'react';
import {StyleSheet,StatusBar, Text, View, TouchableOpacity} from 'react-native';
import {createAppContainer,createStackNavigator, createDrawerNavigator, createSwitchNavigator} from 'react-navigation'
import globalColors from './src/utils/colors';
import Screens, {AuthScreensStack} from './src/utils/screens'
import  Login from './src/pages/Login'
import RegistrationForm from './src/pages/RegistrationForm'
import  InitialPage from './src/pages/InitialPage'
import  ForgotPassword from './src/pages/ForgotPassword'
import  OtherScreen from './src/pages/OtherScreen'
import  AuthLoading from './src/pages/AuthLoading'
import {Provider} from 'react-redux'
import store from './src/store/store';


const RouteAuthConfig = {
  [AuthScreensStack.InitialPage] : {
    screen: InitialPage,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  [AuthScreensStack.RegistrationFormPage]: {
    screen: RegistrationForm,
    navigationOptions: ({ navigation }) => ({
      title: "Register",
      headerTintColor:globalColors.white,
      headerStyle:{
        backgroundColor:globalColors.baseBlue
      }
    }),
  },
 
  [AuthScreensStack.LoginPage] : {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  [AuthScreensStack.ForgotPassword]:{
      screen:ForgotPassword,
      navigationOptions: ({ navigation }) => ({
        title: "Recover Password",
        headerTintColor:globalColors.white,
        headerStyle:{
          backgroundColor:globalColors.baseBlue
        }
      }),
  }
};

const RouteAppConfig = {
  Other: { 
    screen: OtherScreen
  }
}

const AppStack = createDrawerNavigator(RouteAppConfig);

const AuthStack =  createStackNavigator(RouteAuthConfig );


const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex:1}}>
          <StatusBar backgroundColor={globalColors.baseBlue} barStyle="ligth-content" />
          <AppContainer/>
        </View>
      </Provider>
    );
  }
}

