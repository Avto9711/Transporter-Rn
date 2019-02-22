
import React, { Component } from 'react';

import  {StyleSheet, Image, Text, View}  from 'react-native';
import globalColors from '../utils/colors';


type Props = {textLabel: string, textSize: null, fontWeight:string};

export default class Logo extends Component<Props> {
    render() {
      return (
        <View style={styles.container}>
            <Image  style={styles.logo}  source={require("../images/logo.png")}  />
            <Text style={[styles.logoText, {fontSize: (this.props.textSize || 40), fontWeight: (this.fontWeight || "normal") }]}> {this.props.textLabel || 'Welcome to Transporter'} </Text>
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
        color: globalColors.white,
        marginVertical: 15,
    },
    additionalText:{
        fontSize: 16,
        color: globalColors.white,
    }
});
