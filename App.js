import React, {Component, applyMiddleware, compose} from 'react';
import {StatusBar,  View, SafeAreaView,ScrollView,Dimensions, Image,StyleSheet, Text} from 'react-native';
import {createAppContainer,createStackNavigator, createDrawerNavigator, createSwitchNavigator, DrawerItems} from 'react-navigation'
import globalColors from './src/utils/colors';
import Screens, {AuthScreensStack,AppStack} from './src/utils/screens'
import  Login from './src/pages/Login'
import RegistrationForm from './src/pages/RegistrationForm'
import  InitialPage from './src/pages/InitialPage'
import  ForgotPassword from './src/pages/ForgotPassword'
import  HomeScreen from './src/pages/HomeScreen'
import  AuthLoading from './src/pages/AuthLoading'
import {Provider} from 'react-redux'
import store from './src/store/store';
import  {Icon, Badge, Text as Test, Button as RnButton, ListItem, Left} from 'native-base'



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


const CustomDrawerComponent = props =>(
  <ScrollView >
    <SafeAreaView style={{flex:1}}>
    <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
      <View style={styles.profileImage}>
          <Image source={require("./src/images/user.png")} style={{width: 72,height: 72 }}  />
        </View>
        <View style={{flex:1, flexDirection:'column', marginTop:30, marginLeft:0}}>
              <Text style={{padding:4, fontWeight:"bold"}}>Israel Rivera</Text>
              <Text style={{padding:4, fontWeight:"bold"}}>Profile Settings</Text>
              <Text style={{padding:4, fontWeight:"bold"}}>Public profile view</Text>
        </View>
        <View  style={{padding:20, position:'absolute', right:0}}>
        <RnButton transparent iconLeft>
            <Icon style={{color:'black'}} type="FontAwesome" name="bell"   />
            <Text>5</Text>
          </RnButton>
        </View>
    </View>
      <DrawerItems {...props}/>
          </SafeAreaView>
  </ScrollView>

);


const DrawerRouteConfig = {
  [AppStack.HomeScreen]: { 
    screen: HomeScreen
  }
}

const styles = StyleSheet.create({
  profileImage:{
    height:100, 
    backgroundColor:globalColors.white, 
    flexDirection:"column",
    justifyContent:"flex-end",
    marginLeft:10 }
})



const DrawerStack = createDrawerNavigator(DrawerRouteConfig,{
  contentComponent: CustomDrawerComponent
});

const AuthStack =  createStackNavigator(RouteAuthConfig );


const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: DrawerStack,
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

