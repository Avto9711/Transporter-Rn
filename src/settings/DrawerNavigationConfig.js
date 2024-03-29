import  HomeScreen from '../pages/HomeScreen'
import  Profile from '../pages/Profile'

import  MyRecipientsCouriers from '../pages/MyRecipientsCouriers'
import  PackageDelivery from '../pages/PackageDelivery'
import  RecipientsBoard from '../pages/RecipientsBoard'
import  RegistrationForm from '../pages/RegistrationForm'
import  Trip from '../pages/Trip'
import  TransporterBoard from '../pages/TransporterBoard'
import  Messages from '../pages/Messages'
import  MessageDetails from '../pages/MessageDetails'
import  PrivacyAndTerms from '../pages/PrivacyAndTerms'
import  Settings from '../pages/Settings'
import  ProfileSetting from '../pages/ProfileSetting'
import  PackageDeliveryDetail from '../pages/PackageDeliveryDetail'


import {AppStack} from '../utils/screens'


const DrawerRouteConfig = {
    [AppStack.Profile]: { 
      screen: Profile,
      drawerMenuConfig:{
        showInDrawerMenu:false,
        drawerMenuTitle:"Profile",
      }
    },
    [AppStack.ProfileSetting]: { 
      screen: ProfileSetting,
      drawerMenuConfig:{
        showInDrawerMenu:false,
        drawerMenuTitle:"Profile Setting",
      }
    },
    [AppStack.Home]: { 
      screen: HomeScreen,
      drawerMenuConfig:{
        showInDrawerMenu:true,
        drawerMenuTitle:"Home",
        titleIcon:"home",
        titleIconType:"FontAwesome"
      }

    },
    [AppStack.PackageDelivery]: { 
      screen: PackageDelivery,
      drawerMenuConfig:{
        drawerMenuTitle:"Package for delivery",
        titleIcon:"plus",
      }
      
    },
    [AppStack.Trip]: { 
      screen: Trip,
      drawerMenuConfig:{
        drawerMenuTitle:"Trips",
        titleIcon:"plane",
      }
      
    },
    [AppStack.RecipientsBoard]: { 
      screen: RecipientsBoard,
      drawerMenuConfig:{
        drawerMenuTitle:"Recipients Board",
        titleIcon:"th",
      }
    },
    [AppStack.TransporterBoard]: { 
      screen: TransporterBoard,
      drawerMenuConfig:{
        drawerMenuTitle:"Transporter Board",
        titleIcon:"address-book-o",
      }
    },
    
    [AppStack.Message]: { 
      screen: Messages,
      drawerMenuConfig:{
        drawerMenuTitle:"Messages",
        titleIcon:"comments-o",
      }
    },
    [AppStack.MessageDetails]: { 
      screen: MessageDetails,
      drawerMenuConfig:{
        drawerMenuTitle:"MessageDetails",
        showInDrawerMenu:false,
      }
    },
    
    [AppStack.MyRecipientsCouriers]: { 
      screen: MyRecipientsCouriers,
      drawerMenuConfig:{
         drawerMenuTitle:"My recipients/Couriers",
         titleIcon:"list-ul",
      }
    },
    [AppStack.PrivacyAndTerms]: { 
      screen: PrivacyAndTerms,
      drawerMenuConfig:{
         drawerMenuTitle:"Privacy and Terms",
         titleIcon:"lock",
      }
    },
    [AppStack.Settings]: { 
      screen: Settings,
      drawerMenuConfig:{
         drawerMenuTitle:"Settings",
         titleIcon:"cog",
      }
    },
    [AppStack.PackageDeliveryDetail]: { 
      screen: PackageDeliveryDetail,
      drawerMenuConfig:{
         drawerMenuTitle:"Package for delivery",
         showInDrawerMenu:false,
      }
    },

  }

  
  export default DrawerRouteConfig