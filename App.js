import React, {Component, applyMiddleware, compose} from 'react';
import {StatusBar,  View} from 'react-native';
import {createAppContainer,createStackNavigator, createDrawerNavigator, createSwitchNavigator} from 'react-navigation'
import globalColors from './src/utils/colors';
import  AuthLoading from './src/pages/AuthLoading'
import {Provider} from 'react-redux'
import store from './src/store/store';
import CustomDrawerComponent from './src/settings/CustomDrawerComponent'
import DrawerRouteConfig from './src/settings/DrawerNavigationConfig'
import RouteAuthConfig from './src/settings/RouteAuthConfig'
import {AppStack} from './src/utils/screens'
const DrawerStack = createDrawerNavigator(DrawerRouteConfig,{
  contentComponent: CustomDrawerComponent,
  drawerWidth :380,
  initialRouteName:AppStack.PackageDeliveryDetail
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

export default class App extends Component {
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