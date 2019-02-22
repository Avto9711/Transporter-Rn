import React, { Component } from 'react';
import {View,Text} from 'react-native';

class RegistrationForm extends Component {
    state = {  }
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View>
                <Text onPress={()=>{this.props.navigation.navigate ('AppWrapper')}}>Registration Form</Text>
            </View>
        );
    }
}

export default RegistrationForm;