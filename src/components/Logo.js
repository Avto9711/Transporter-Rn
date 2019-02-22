
import React, { Component } from 'react';

import  {StyleSheet, Image, Text, View}  from 'react-native';


type Props = {textLabel: "", textSize: null, fontWeight:""};

export default class Logo extends Component<Props> {
    render() {
      return (
        <View style={styles.container}>
            <Image  style={styles.logo}  source={require("../images/logo.png")}  />
            <Text style={[styles.logoText, {fontSize: (this.props.textSize || 40), fontWeight: (this.fontWeight || "") }]}> {this.props.textLabel || 'Welcome to Transporter'} </Text>
            {!this.props.hiddenAditionalText &&
                <Text  style={styles.additionalText}> {this.props.additionalText || 'Personal courier'}</Text>
            }
            
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    logo: {
        width: 90,
        height: 90
    },
    logoText:{
        fontSize: 20,
        color: "#ffff",
        marginVertical: 15,
    },
    additionalText:{
        fontSize: 16,
        color: "#ffff",
    }
});
