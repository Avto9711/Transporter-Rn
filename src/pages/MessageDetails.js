import React from "react";
import { AsyncStorage, StatusBar, StyleSheet, View } from "react-native";

import { connect } from "react-redux";

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

import globalColors from "../utils/colors";
import { GiftedChat } from "react-native-gifted-chat";
import { AppStack } from "../utils/screens";

class MessageDetails extends React.Component {
  static navigationOptions = {};
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hey leandro, we wont send videos only pictures.",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any"
          },
          image:
            "https://upload.wikimedia.org/wikipedia/commons/a/af/Tour_eiffel_at_sunrise_from_the_trocadero.jpg"
        }
      ]
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

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
              onPress={() => this.props.navigation.navigate(AppStack.Message)}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Amy Farha</Title>
          </Body>
          <Right>
            <Button
              transparent
            >
              <Icon type="FontAwesome" name="ellipsis-v" />
            </Button>
          </Right>
        </Header>
        <Content
          contentContainerStyle={{
            flex: 1,
          }}
        >
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1
            }}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  }
});

const mapStateToProps = state => ({
  token: state.token
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageDetails);
