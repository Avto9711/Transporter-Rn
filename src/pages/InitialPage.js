import React from 'react';
import {StyleSheet,TouchableOpacity, Text, View} from 'react-native';
import globalStyle from '../utils/styles'
import  {AuthScreensStack} from '../utils/screens'

import Logo from '../components/Logo'

import { connect } from 'react-redux';

class InitialPage extends React.Component{

    goTo = (page)=>{
        this.props.navigation.navigate(page)
    }

  render() {
    return (
        <View style={globalStyle.container}>
            <View style={styles.container}>
                <Logo textLabel="Transporter"  />
                <View style={styles.containerButton}>
                    <TouchableOpacity onPress={()=>{this.goTo(AuthScreensStack.RegistrationFormPage)}} style={styles.button}>
                        <Text style={styles.buttonText}>Sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.goTo(AuthScreensStack.LoginPage)}} style={styles.button}>
                        <Text  style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signupTextContainer}>
                    <Text onPress={()=>{this.goTo(AuthScreensStack.ForgotPassword)}} style={styles.signupText}>Forgot your password? </Text>
                </View>
            </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container:{
      backgroundColor : "#2196f3",
      flex: 1,
      alignItems: "center",
      justifyContent:"center"
    },
    containerButton: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    button:{
       // backgroundColor: "#0069c0",
        backgroundColor: "#ffff",
        borderRadius: 25,
        marginVertical: 10,
        width: 300,
        paddingVertical: 12,
    },
    buttonText : {
        fontSize: 16,
        fontWeight: '500',
       // color: "#ffff",
        color: "#0069c0",
        textAlign:"center"
    },
    signupTextContainer:{
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginVertical: 20,
        flexDirection: 'row',
      },
      signupText:{
          color: 'rgba(255,255,255,0.8)'
      },
});
  

const mapStateToProps = state => ({
    token: state.token,
  });
  
  
const mapDispatchToProps = dispatch => ({
//removeUserToken: () => dispatch(removeUserToken()),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(InitialPage);
  