import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'native-base'

class Messages extends Component{
    static navigationOptions = {
        title: 'Messages',
        drawerIcon: ()=>    <Icon type="FontAwesome" name="comments-o"/>
    };

    render(){   
        return (
            <View><Text>Messages Page</Text></View>
        )

    }
}

export default Messages