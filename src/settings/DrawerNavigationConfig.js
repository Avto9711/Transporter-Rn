import  HomeScreen from '../pages/HomeScreen'
import  MyRecipientsCouriers from '../pages/MyRecipientsCouriers'
import  PackageDelivery from '../pages/PackageDelivery'
import  RecipientsBoard from '../pages/RecipientsBoard'
import  RegistrationForm from '../pages/RegistrationForm'
import  Trip from '../pages/Trip'
import  TransporterBoard from '../pages/TransporterBoard'
import  Messages from '../pages/Messages'


import {AppStack} from '../utils/screens'


const DrawerRouteConfig = {
    [AppStack.Home]: { 
      screen: HomeScreen
    },
    [AppStack.PackageDelivery]: { 
      screen: PackageDelivery
    },
    [AppStack.Trip]: { 
      screen: Trip
    },
    [AppStack.RecipientsBoard]: { 
      screen: RecipientsBoard
    },
    [AppStack.TransporterBoard]: { 
      screen: TransporterBoard
    },
    
    [AppStack.Message]: { 
      screen: Messages
    },
    
    [AppStack.MyRecipientsCouriers]: { 
      screen: MyRecipientsCouriers
    },

  }

  
  export default DrawerRouteConfig