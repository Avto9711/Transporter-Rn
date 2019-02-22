import React, {Component} from 'react';
import {StyleSheet,TouchableOpacity, Text, View} from 'react-native';
import globalStyle from '../utils/styles'

import Logo from '../components/Logo'

import { withNavigation } from 'react-navigation';

 class InitialPage extends Component<{}> {

    goTo = (page)=>{
        this.props.navigation.navigate(page)
    }

  render() {
    return (
        <View style={globalStyle.container}>
            <View style={styles.container}>
                <Logo textLabel="Transporter"  />
                <View style={styles.containerButton}>
                    <TouchableOpacity onPress={()=>{this.goTo('RegistrationFormPage')}} style={styles.button}>
                        <Text style={styles.buttonText}>Sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.goTo('LoginPage')}} style={styles.button}>
                        <Text  style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signupTextContainer}>
                    <Text style={styles.signupText}>Forgot your password? </Text>
                </View>
            </View>
        </View>
    );
  }
}

export default withNavigation(InitialPage)


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
  