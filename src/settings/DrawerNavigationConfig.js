import  HomeScreen from '../pages/HomeScreen'
import  Profile from '../pages/Profile'



import {AppStack} from '../utils/screens'
const DrawerRouteConfig = {
    [AppStack.HomeScreen]: { 
      screen: HomeScreen
    },
    [AppStack.Profile]: { 
      screen: Profile,
    }
  }

  
  export default DrawerRouteConfig