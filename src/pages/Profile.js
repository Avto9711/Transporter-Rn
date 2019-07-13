import React from 'react';
import {StyleSheet, View, Image, ImageBackground, ScrollView} from 'react-native';
import {Header,Left,Icon, Container, Content,Body,Title,Right, Button, Grid, Col, Text, Row, Badge , Card, CardItem, List, ListItem, Thumbnail} from 'native-base'
import { Rating, AirbnbRating, Divider} from 'react-native-elements';
import { Avatar } from 'react-native-elements';

import globalColors from '../utils/colors';

import { connect } from 'react-redux';

 class Profile extends React.Component {


  constructor(props){
    super(props);
    this.state = { _rating: 3 };

  }

  ratingCompleted = (rating) => {
    this.setState({_rating: rating});
  }

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
          <ScrollView>
              <Grid>
                  <Row style={{ backgroundColor: '#635DB7', height: 150 }}>
                    <ImageBackground
                          resizeMode={'stretch'} // or cover
                          style={{flex: 1}} // must be passed from the parent, the number may vary depending upon your screen size
                          source={{uri: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/45238751_10218432926922321_2853116813040943104_n.jpg?_nc_cat=100&_nc_ht=scontent-mia3-2.xx&oh=3aa001f707e440c918fe8871d09473ad&oe=5D19FB10'}}
                        >
                      <Avatar
                      rounded
                      style={{ position:'absolute', bottom: -37, width: 100,height: 100, left: "38%"}} 
                            source={{
                              uri:
                              'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/p240x240/45252662_10218432882521211_5551562546558795776_n.jpg?_nc_cat=100&_nc_ht=scontent-mia3-2.xx&oh=f61915680a20a6a3e76bba24fd9866f8&oe=5D1A504D'                          }}
                            
                          />
                      </ImageBackground>
                  </Row>
                  <Row  style={{ marginTop: 45,  height: 130}}> 

                  <View style={{flex:1,  textAlign: 'center',  alignItems: 'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 25}}>Israel Rivera</Text>
                        <Text style={{fontSize: 18}}>Joined XX on XXX - Kissimme Florida</Text>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems:'center'}}>
                          <AirbnbRating
                            onFinishRating={this.ratingCompleted}
                            count={5}
                            defaultRating={3}
                            size={25}
                            showRating={false}
                          /> 
                          <Text>({this.state._rating})</Text>
                        </View>
                      

                      </View>
          
                  </Row>
                  <Divider style={{ height:1, backgroundColor: '#cecece', marginHorizontal: 15  }} />
                  <Row  style={{ height: 130, marginVertical: 10}}> 
                      <View style={{marginVertical: 10, flex:1, marginHorizontal: 10 }}>
                        <Text style={{fontWeight: '500', fontSize: 20}}>Positive reviews - <Text style={{ fontSize: 15}}>Base on 3 deliveries</Text></Text>
                       
                        <View style={{flex: 1, flexDirection: 'row',  justifyContent:'space-between'}}>
                          <View style={{ marginVertical: 20, margin:3}}>
                            <Badge info  style={{height: 50, width: 180,  flexDirection: 'row', justifyContent:'space-between'}}>
                              <Text style={{marginVertical: 10}}>Responsible</Text>
                              <Badge primary style={{alignSelf: 'center'}}>
                                  <Text>2</Text>
                              </Badge>

                            </Badge>
                          </View>
                          <View style={{ marginVertical: 20, margin:5}} >
                            <Badge info  style={{height: 50, width: 180, justifyContent:'space-between',  flexDirection: 'row'}}>
                              <Text style={{marginVertical: 10}}>Good Comunication</Text>
                              <Badge primary style={{alignSelf: 'center'}}>
                                  <Text>1</Text>
                              </Badge>

                            </Badge>
                          </View>
                        
                        </View>
                        
                      </View>
                  </Row>
                  <Divider style={{ height:1, backgroundColor: '#cecece', marginHorizontal: 15 , marginBottom: 15  }} />
                  <Row  > 
                      <View style={{marginVertical: 10, flex:1, marginHorizontal: 10 }}>
                        <Text style={{fontWeight: '500', fontSize: 20}}>Recipients</Text>


                          <List>
                          <ListItem avatar>
                            <Left>
                              <Thumbnail source={{ uri: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/p240x240/20767707_1580917721981297_1925557712514895773_n.jpg?_nc_cat=109&_nc_ht=scontent-mia3-2.xx&oh=a056107ce14fb63beee25421ecd527be&oe=5D1D588D'  }} />
                            </Left>
                            <Body>
                              <Text>Angel Torres</Text>
                              <Text note>Santo Domingo, DR, 11507, PlayStation 4 Slim - USD 400</Text>
                            </Body>
                            <Right>
                              <Text note>04/11/2017</Text>
                            </Right>
                          </ListItem>
                          <ListItem avatar>
                            <Left>
                              <Thumbnail source={{ uri: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/c54.101.432.432a/s240x240/10268650_946841328719523_8610575132192235314_n.jpg?_nc_cat=108&_nc_ht=scontent-mia3-2.xx&oh=da340e252f22a1d9c93532861b1c042a&oe=5D4E10DA'  }} />
                            </Left>
                            <Body>
                              <Text>Leandro Jimenez</Text>
                              <Text note>Santo Domingo, DR, 11507, PlayStation 4 Slim - USD 400</Text>
                            </Body>
                            <Right>
                              <Text note>28/12/2018</Text>
                            </Right>
                          </ListItem>
                          <ListItem avatar>
                            <Left>
                              <Thumbnail source={{ uri: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/p240x240/20767707_1580917721981297_1925557712514895773_n.jpg?_nc_cat=109&_nc_ht=scontent-mia3-2.xx&oh=a056107ce14fb63beee25421ecd527be&oe=5D1D588D'  }} />
                            </Left>
                            <Body>
                              <Text>Angel Torres</Text>
                              <Text note>Santo Domingo, DR, 11507, PlayStation 4 Slim - USD 400</Text>
                            </Body>
                            <Right>
                              <Text note>04/11/2017</Text>
                            </Right>
                          </ListItem>
                          <ListItem avatar>
                            <Left>
                              <Thumbnail source={{ uri: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/c54.101.432.432a/s240x240/10268650_946841328719523_8610575132192235314_n.jpg?_nc_cat=108&_nc_ht=scontent-mia3-2.xx&oh=da340e252f22a1d9c93532861b1c042a&oe=5D4E10DA'  }} />
                            </Left>
                            <Body>
                              <Text>Leandro Jimenez</Text>
                              <Text note>Santo Domingo, DR, 11507, PlayStation 4 Slim - USD 400</Text>
                            </Body>
                            <Right>
                              <Text note>28/12/2018</Text>
                            </Right>
                          </ListItem>
                        </List>
                      </View>
                  </Row>
              </Grid>
          </ScrollView>
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
