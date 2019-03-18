import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Header,Left,Icon, Container, Content,Body,Title,Right, Button, Grid, Col, Text, Row} from 'native-base'

import globalColors from '../utils/colors';

import { connect } from 'react-redux';

 class Profile extends React.Component {


  render() {
    return (
    <Container style={{flex:1}}>
        <Header style={{backgroundColor: globalColors.baseBlue}} androidStatusBarColor={globalColors.baseBlue}>
                <Left>
                    <Button 
                    transparent
                    onPress={() => this.props.navigation.openDrawer()}
                    >
                    <Icon name="ios-menu" />
                    </Button>
                </Left>
                <Body>
                    <Title>Profile</Title>
                </Body>
            <Right />
        </Header>
        <Content contentContainerStyle={{flex:1}}>
            <View >
                <Grid>
                    <Row style={{ backgroundColor: '#635DB7', height: 130 }}>
                        <Image source={require("../images/user.png")} style={{ position:'absolute', bottom: -40, width: 100,height: 100, left: "38%"}}  />
                    </Row>
                    <Row  style={{ backgroundColor: '#635DB7', height: 130 }}> 
                        <Text>Israel Rivera</Text>
                    </Row>
                </Grid>
                
                {/* <View style={{flex:1}}> 
                </View>
               */}
            </View>
        </Content>

    </Container>
 
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor : globalColors.baseContainerBlue,
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
        color: globalColors.white,
        fontSize: 14,
        fontWeight: '500',
    }
  });
  
  
const mapStateToProps = state => ({
  token: state.token,
});


const mapDispatchToProps = dispatch => ({
  //removeUserToken: () => dispatch(removeUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
