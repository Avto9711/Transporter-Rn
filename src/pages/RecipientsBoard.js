import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'native-base'

class RecipientsBoard extends Component{
    static navigationOptions = {
        title: 'Recipients Board',
        drawerIcon: ()=>    <Icon type="FontAwesome" name="th"/>
    };

    render(){   
        return (
            <View><Text>RecipientsBoard Page</Text></View>
        )

    }
}

export default RecipientsBoard