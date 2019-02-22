import React, {Component} from 'react';
import {StyleSheet,StatusBar, Text, View, Button} from 'react-native';

import Logo from '../components/Logo'
import LoginForm from '../components/LoginForm'
import { withNavigation } from 'react-navigation';

 class Login extends Component {

  redirectToRegistrationForm = ()=>{
    debugger
    this.props.navigation.navigate(
      'RegistrationFormPage'
    )
  }
  render() {
    return (
        <View styles={styles.container}>
        <StatusBar backgroundColor="#0069c0" barStyle="ligth-content" />
            <Logo />
            <LoginForm />
            <View style={styles.signupTextContainer}>
                <Text style={styles.signupText}>Do not have an account yet? </Text>
                <Text onPress={()=>{this.props.navigation.navigate("RegistrationFormPage")}} style={styles.signupLinkText}>SignUp</Text>
            </View>
        </View>
    );
  }
}

export default withNavigation(Login)


const styles = StyleSheet.create({
  container:{
    backgroundColor : "#2196f3",
    flex: 1,
    alignItems: "center",
    justifyContent:"center"
  },
    signupTextContainer:{
      flexGrow: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      marginVertical: 20,
      flexDirection: 'row',
    },
    signupText:{
        color: 'rgba(255,255,255,0.6)'
    },
    signupLinkText:{
        color: '#ffff',
        fontSize: 14,
        fontWeight: '500',
    }
  });
  