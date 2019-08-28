import React, { Component } from "react";
import { View } from "react-native";
import globalColors from "../utils/colors";
import {
  Header,
  Left,
  Icon,
  Container,
  Content,
  Body,
  Title,
  Right,
  Button,
  Text
} from "native-base";
import { ListItem } from "react-native-elements";
import { AppStack } from "../utils/screens";

import { connect } from "react-redux";

class Messages extends Component {
  static navigationOptions = {};
  constructor(props) {
    super(props);
  }
  state = {
    list: [
      {
        name: "Amy Farha",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "Vice President"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        subtitle: "Vice Chairman"
      },
      {
        name: "Amy Farha",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "Vice President"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        subtitle: "Vice Chairman"
      },
      {
        name: "Amy Farha",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "Vice President"
      },
      {
        name: "Amy Farha",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "Vice President"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        subtitle: "Vice Chairman"
      },
      {
        name: "Amy Farha",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "Vice President"
      },
      {
        name: "Chris Jackson",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        subtitle: "Vice Chairman"
      },
      {
        name: "Amy Farha",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "Vice President"
      }
    ]
  };

  redirectToDetail = () => {
    this.props.navigation.navigate(AppStack.MessageDetails);
  };

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Header
          style={{ backgroundColor: globalColors.baseBlue }}
          androidStatusBarColor={globalColors.baseBlue}
        >
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Messages </Title>
          </Body>
          <Right>
            <Button
              transparent
            >
              <Icon type="FontAwesome" name="edit" />
            </Button>
          </Right>
        </Header>
        <Content>
          <View>
            {this.state.list.map((l, i) => (
              <ListItem
                onPress={() => {
                  this.redirectToDetail();
                }}
                key={i}
                leftAvatar={{ source: { uri: l.avatar_url } }}
                title={l.name}
                subtitle={l.subtitle}
              />
            ))}
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  token: state.token
});

const mapDispatchToProps = dispatch => ({
  //removeUserToken: () => dispatch(removeUserToken()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
