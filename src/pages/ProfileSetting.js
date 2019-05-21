import React from 'react';
import { StyleSheet, View, Image, ImageBackground, ScrollView } from 'react-native';
import { Switch,Item, Input, Header, Left, Icon, Container, Content, Body, Title, Right, Button, Grid, Col, Text, Row, Badge, Card, CardItem, List, ListItem, Thumbnail, Footer } from 'native-base'
import { Rating, AirbnbRating, Divider } from 'react-native-elements';
import { Avatar } from 'react-native-elements';

import globalColors from '../utils/colors';

import { connect } from 'react-redux';

class ProfileSetting extends React.Component {


  constructor(props) {
    super(props);
    this.state = { _rating: 3 };

  }



  ratingCompleted = (rating) => {
    this.setState({ _rating: rating });
  }

  render() {
    return (

      <Container style={{ flex: 1 }}>
        <Header style={{ backgroundColor: globalColors.baseBlue }} androidStatusBarColor={globalColors.baseBlue}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Profile Settings</Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={{ flex: 1 }}>
          <ScrollView>
            <Grid>
              <Row style={{ backgroundColor: '#635DB7', height: 150 }}>
                <ImageBackground
                  resizeMode={'stretch'} // or cover
                  style={{ flex: 1 }} // must be passed from the parent, the number may vary depending upon your screen size
                  source={{ uri: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/45238751_10218432926922321_2853116813040943104_n.jpg?_nc_cat=100&_nc_ht=scontent-mia3-2.xx&oh=3aa001f707e440c918fe8871d09473ad&oe=5D19FB10' }}
                >
                  <Avatar
                    rounded
                    style={{ position: 'absolute', bottom: -37, width: 100, height: 100, left: "38%" }}
                    source={{
                      uri:
                        'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/p240x240/45252662_10218432882521211_5551562546558795776_n.jpg?_nc_cat=100&_nc_ht=scontent-mia3-2.xx&oh=f61915680a20a6a3e76bba24fd9866f8&oe=5D1A504D'
                    }}
                    showEditButton
                  />
                </ImageBackground>
              </Row>
              <Row style={{ marginTop: 45, height: 130 }}>

                <View style={{ flex: 1, textAlign: 'center', alignItems: 'center' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Israel Rivera</Text>
                  <Text style={{ fontSize: 18 }}>Joined XX on XXX - Kissimme Florida</Text>
                  <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
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

              <Row style={{ marginTop: 10 }}>
                <View style={{ marginVertical: 10, flex: 1, marginHorizontal: 10 }}>

                  <List style={{ marginHorizontal: 10 }}>
                    <ListItem avatar style={{marginTop:5}} >
                      <Left>
                        <Icon
                          active
                          type={"AntDesign"}
                          name={"user"}
                          style={{ color: globalColors.baseBlue, fontSize: 26, width: 30 }}
                        />
                      </Left>
                      <Body>
                        <Text>Complete Name - Israel Rivera</Text>
                      </Body>
                      <Right>
                        <Icon
                          active
                          type={"AntDesign"}
                          name={"edit"}
                          style={{ color: globalColors.baseBlue, fontSize: 26, width: 30 }}
                        />
                      </Right>
                    </ListItem>
                    <ListItem avatar style={{marginTop:5}} >
                      <Left>
                        <Icon
                          active
                          type={"Entypo"}
                          name={"email"}
                          style={{ color: globalColors.baseBlue, fontSize: 26, width: 30 }}
                        />
                      </Left>
                      <Body>
                        <Text>Email - ir@gmail.com</Text>
                      </Body>
                      <Right>
                        <Icon
                          active
                          type={"AntDesign"}
                          name={"edit"}
                          style={{ color: globalColors.baseBlue, fontSize: 26, width: 30 }}
                        />
                      </Right>
                    </ListItem>
                    <ListItem avatar style={{marginTop:5}} >
                      <Left>
                        <Icon
                          active
                          type={"Entypo"}
                          name={"address"}
                          style={{ color: globalColors.baseBlue, fontSize: 26, width: 30 }}
                        />
                      </Left>
                      <Body>
                        <Text>Address - Kissimme, Florida </Text>
                      </Body>
                      <Right>
                        <Icon
                          active
                          type={"AntDesign"}
                          name={"edit"}
                          style={{ color: globalColors.baseBlue, fontSize: 26, width: 30 }}
                        />
                      </Right>


                    </ListItem>
                    <ListItem avatar style={{marginTop:5}} >
                      <Left>
                        <Icon
                          active
                          type={"Entypo"}
                          name={"phone"}
                          style={{ color: globalColors.baseBlue, fontSize: 26, width: 30 }}
                        />
                      </Left>
                      <Body>
                        <Text>Phone number - ############ </Text>
                        <Text style={styles.smallText}>We have sent you a text message with a code, write it here to verifiy your number</Text>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                          <View style={{ flex: 10 }}>
                            <Item regular>
                              <Input />
                            </Item>
                          </View>
                       
                          <View style={{ paddingLeft: 15,flex: 5 }}>
                              <Button style={{backgroundColor: globalColors.baseBlue}} ><Text> Verify </Text></Button>
                          </View>
                        </View>

                      </Body>
                      <Right>
                        <Icon
                          active
                          type={"AntDesign"}
                          name={"edit"}
                          style={{ color: globalColors.baseBlue, fontSize: 26, width: 30 }}
                        />
                      </Right>


                    </ListItem>

                    <ListItem avatar style={{marginTop:5}} >
                      <Left>
                        <Icon
                          active
                          type={"Entypo"}
                          name={"credit-card"}
                          style={{ color: globalColors.baseBlue, fontSize: 26, width: 30 }}
                        />
                      </Left>
                      <Body>
                        <Text>Financial information - Card Ended - 92 11</Text>
                      </Body>
                      <Right>
                        <Icon
                          active
                          type={"AntDesign"}
                          name={"edit"}
                          style={{ color: globalColors.baseBlue, fontSize: 26, width: 30 }}
                        />
                      </Right>
                    </ListItem>
                  </List>
                 

                </View>
              </Row>
            </Grid>
          </ScrollView>
        </Content>
        <Button block style={{backgroundColor: globalColors.baseBlue, margin: 10}} ><Text> HELP </Text></Button>


      </Container >

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalColors.baseContainerBlue,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  signupTextContainer: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginVertical: 20,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(255,255,255,0.6)'
  },
  signupLinkText: {
    color: globalColors.white,
    fontSize: 14,
    fontWeight: '500',
  },
  smallText: {
    fontSize: 12,
    paddingTop: 3,
  }
});


const mapStateToProps = state => ({
  token: state.token,
});


const mapDispatchToProps = dispatch => ({
  //removeUserToken: () => dispatch(removeUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSetting);
