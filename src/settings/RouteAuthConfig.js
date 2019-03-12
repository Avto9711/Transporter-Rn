import Screens, {AuthScreensStack,AppStack} from '../utils/screens'
import  Login from '../pages/Login'
import RegistrationForm from '../pages/RegistrationForm'
import  InitialPage from '../pages/InitialPage'
import  ForgotPassword from '../pages/ForgotPassword'
import  HomeScreen from '../pages/HomeScreen'
import globalColors from '../utils/colors';


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

  export default RouteAuthConfig