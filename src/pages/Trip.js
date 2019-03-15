import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'native-base'

class Trip extends Component{
    static navigationOptions = {
        title: 'Trips',
        drawerIcon: ()=>    <Icon type="FontAwesome" name="plane"/>
    };


    render(){   
        return (
            <View><Text>Trip Page</Text></View>
        )

    }
}

export default Trip