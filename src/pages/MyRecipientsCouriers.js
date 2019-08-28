import React, {Component} from 'react';
import {
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    FlatList,
    ScrollView,
    Image
} from 'react-native';

import { connect } from 'react-redux';
import { removeUserToken } from '../actions/actions';

import {Header,Left,Icon, Container, Content,Body,Title,Right, Button, Grid, Col, Text, Row, Badge , Card, CardItem, List, ListItem, Thumbnail} from 'native-base'

import globalColors from '../utils/colors'

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import { Divider, SearchBar } from "react-native-elements";


class RecipientsTab extends React.Component {
    static navigationOptions = {
        title: 'Recipients',
        drawerIcon: ()=>    <Icon type="FontAwesome" name="list-ul"/>
    };
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
                    <Title>Recipients</Title>
                </Body>
            <Right />
        </Header>
        <Content>

        <List>
            <ListItem avatar>
            <Left>
                <Thumbnail source={{ uri: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/20767707_1580917721981297_1925557712514895773_n.jpg?_nc_cat=109&_nc_oc=AQmVCdWJpjNGrTDWyF7r_L3v6c-ZDaARCjmLmbS3DGGD400TGqRUZcgSu7OamgFN4ys&_nc_ht=scontent-mia3-2.xx&oh=19e2d7889800bb23464a93b05b17d2cf&oe=5DC988DF'  }} />
            </Left>
            <Body>
                <Text>Angel Torres</Text>
                <Text note>Santo Domingo, DR, 11507, PlayStation 4 Slim - USD 400</Text>
            </Body>
            <Right>
                <Text note>See Details</Text>
            </Right>
            </ListItem>
            <ListItem avatar>
            <Left>
                <Thumbnail source={{ uri: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/10268650_946841328719523_8610575132192235314_n.jpg?_nc_cat=108&_nc_oc=AQksv8zWiM4kMWVie3Ou5PoU9xiY_Tf0eK8bbHCOZ2BpvVNw-SGKaNk36Kstlx6aXGY&_nc_ht=scontent-mia3-2.xx&oh=33c4a4960059424f9693234b94ce09e1&oe=5E02961B'  }} />
            </Left>
            <Body>
                <Text>Leandro Jimenez</Text>
                <Text note>Santo Domingo, DR, 11507, PlayStation 4 Slim - USD 400</Text>
            </Body>
            <Right>
                <Text note>See Details</Text>
            </Right>
            </ListItem>

        </List>
        </Content>

    </Container>
      );
    }
  }
  
  class TransporterTab extends React.Component {
    static navigationOptions = {
        title: 'Transporters',
        drawerIcon: ()=>    <Icon type="FontAwesome" name="list-ul"/>
    };
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
                    <Title>Transporters</Title>
                </Body>
            <Right />
        </Header>
        <Content>

        <List>
            <ListItem avatar>
            <Left>
                <Thumbnail source={{ uri: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/61321713_10220091030693879_5542567377507450880_n.jpg?_nc_cat=100&_nc_oc=AQk65XzGw3XL7VwmPAf92xWGF5AQ6Y-wath0pXY8j98SeQqoRLR8ea_zyoSfhueJy2I&_nc_ht=scontent-mia3-2.xx&oh=1bd0c75fbd7e04437c1cb8bc95722e66&oe=5E01DD05'  }} />
            </Left>
            <Body>
                <Text>Israel Rivera</Text>
                <Text note>Orlando (MCO), USA, 34743, IPhone 7 - USD 700</Text>
            </Body>
            <Right>
                <Text note>See Details</Text>
            </Right>
            </ListItem>
        </List>
        </Content>

    </Container>
      );
    }
  }
  


class MyTripsPackagesTab extends Component{
    static navigationOptions = {
        title: 'My trips/packages',
        drawerIcon: ()=>    <Icon type="FontAwesome" name="list-ul"/>
    };
    _keyExtractor = (item, index) => item.itemId.toString();

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                  itemId: 1,
                  itemImage:
                    "data:image/jpeg;base64,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",
                  recipient: "Israel Rivera",
                  itemDestination: "Santo Domingo, DR, 11507",
                  itemName: "PlayStation 4",
                  itemValue: 400,
                  itemCurrencyValue: "USD",
                  itemDimension: "Medium",
                  itemWeight: "1 Pound",
                  itemSinceDate: "1d ago"
                },
                {
                  itemId: 2,
                  itemImage:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsBAMAAACLU5NGAAAAG1BMVEUAAAD///9/f3+/v7/f399fX18fHx8/Pz+fn59jyQpqAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACHElEQVR4nO3VTWsaURSA4ZP5uOMy13v8WI40tF06bTBbp1riMtL8gClNocuE0q4VLP3bvXfGQGIlYMGxi/eBeIZ4Ql7GmVEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIB/ExWzm+ao3HnnbPrCX50fq2er0NI1R0+ykvBfX8pKjpyVusqUzek6IOtrceSsuC/ysKoPD8ha2xayOrnZLEJWPdLio7G2CllJ/3L1Xf25vNBcTDHRZkPkx+2RszrD8HrnirHPqsdoVt6sw299lr51w9ueRLrp+jdn2mzI8a+tzLo3IpsqHfisMIxWyXj7ISZdsXnmJOkbJ6M81maxhSz5Vtpr6Yp88FlhRP7kTB+z+lJWohLlRqWoMm0W28gS88n+1PncSWnCCBfb4yXvh78P1N95r1TmYrTeaCdLZPnbWqtSZmHE539nfbELDXVab7SRlUz9z1UvHJZZGPvOVvHav/gbVeuNNrJCxdnEXzK//IcYRmcgnelOln8wNNdWvdFGVuSf8uu8qNKeLwjD33ifVztZZRWpLFex1httZIXvRJWH5rlVj/XM3sfuWdZo8b7MYzffLraRFRXOP8EvF1W4eMKIiivJ5s+y0nKyHMvmWpuNNrIOYNypC/a4uE+Hp27YY7m6G5y6YY/E2vGpG/Ywm3enTgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Jf+ABh/R+zTl92rAAAAAElFTkSuQmCC",
                  recipient: "Angel Torres",
                  itemDestination: "Santo Domingo, DR, 11507",
                  itemName: "PlayStation 3",
                  itemValue: 200,
                  itemCurrencyValue: "USD",
                  itemDimension: "Medium",
                  itemWeight: "1 Pound",
                  itemSinceDate: "3d ago"
                },
                {
                  itemId: 1,
                  itemImage:
                    "data:image/jpeg;base64,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",
                  recipient: "Israel Rivera",
                  itemDestination: "Santo Domingo, DR, 11507",
                  itemName: "PlayStation 4",
                  itemValue: 400,
                  itemCurrencyValue: "USD",
                  itemDimension: "Medium",
                  itemWeight: "1 Pound",
                  itemSinceDate: "1d ago"
                },
                {
                  itemId: 1,
                  itemImage:
                    "data:image/jpeg;base64,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",
                  recipient: "Israel Rivera",
                  itemDestination: "Santo Domingo, DR, 11507",
                  itemName: "PlayStation 4",
                  itemValue: 400,
                  itemCurrencyValue: "USD",
                  itemDimension: "Medium",
                  itemWeight: "1 Pound",
                  itemSinceDate: "1d ago"
                },
                {
                  itemId: 1,
                  itemImage:
                    "data:image/jpeg;base64,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",
                  recipient: "Israel Rivera",
                  itemDestination: "Santo Domingo, DR, 11507",
                  itemName: "PlayStation 4",
                  itemValue: 400,
                  itemCurrencyValue: "USD",
                  itemDimension: "Medium",
                  itemWeight: "1 Pound",
                  itemSinceDate: "1d ago"
                },
                {
                  itemId: 1,
                  itemImage:
                    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEBUPEA8NFQ8VFRAQFQ8PDw8PFQ8PFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLy4uFx8zODMtNygtLisBCgoKDQ0NFw8PFSsdFRkrLTcrKzctLTcrKysrKys3KysrLSs3Li4rLSsrKystListKysrKysrLysvKy0yKysrLf/AABEIANkA6AMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAgMEBgEFCAf/xABMEAACAQICBAgKBggDCAMAAAABAgADEQQFEiExcQYHMkFRYYGxEyIzNHJ0kaGz0SNSc4KSwRQkNUJUk6KyFkNiRFODwsPT4fEIFyX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAeEQEBAQABBAMAAAAAAAAAAAAAARECMUFR4RIhof/aAAwDAQACEQMRAD8A9xnhXC7hJVq42td30EqVKKKHYBUpsU1AdNr9s91nNOf+d4j1jE/FaWJT7Z0/1n/G0rOeZ/XNQgVaqqtgAtRxc2BJNjt1yc0r2c8/Z3t8hNfdFnyHhVjnpvTfF4pqXijwdSvUcar/AFiSBs1bJHzzN6p0UV3Ua2JV2BNtmsHZt901eVPemyqTcaK3H1rc0zmO1d0g2+VcNs1w3ksfirfVqv8ApC26AKoaw3WlwyvjoxyasRh8LWHShfDtbrPjAnsE8vWOLA98yzjhy6pqrU8VRPOSgrJ2GmSx/DLblnCnL8VYUMZhnY/ueEVX/A1m905bSODXtkwdcQnL+V8IMbhreAxWJQDYi1WKfgN190t2V8auZU7Cr+j1hzl6fg3PalgPwxivcoTzjLeNzDPYV8NXpnppslZR1m+ifcZaMu4aZZiLaGLogn92qTRN+iz2v2SYN/CJRwwuCCDsINwYqAQhCAQhCAQhCAQhCAQhCAQhCAQhCATmnP8AzzEesYn4rTpac05+P1zE+sYn4ryxK17Sr5vfTfbbV+WztMtDSr5vUOm45rjs2GUTMjF1qen1fnHMeeT6PV1dETwfUFagIBGnsOuOZpyl3GBFWOrGljiwHVjqxpY6sB1Y6saWOrAeSOrGUjywJmBx1agb0a1amdv0VR6d99jrlny7jDzOltqpVHRWpqf6l0T7TKgsWJR6ll3GqDqxGEYdLUagb+lrd8t2RcLMHjm0KNQipbS8HUUo1httzHsJngSzc8Eq7U8dhmU6/DUl7HYI3uYyYOgIQhMqIQhAIQhAIQhAIQhAIQhAJzVn3neJ9YxPxXnSs5pz7zzE+sYn4ryxKgNKpnHlH3juEtTSq5x5R9/5CWjYcHdlT0o5mvKG4xvg9sqelHM05Q3GBEWOrGhHVgOrHVjKx1YDyxxY0pi1MB9Y8sYQx1TAeEcEaEWplQ4JteDPnuG+3w/xFmpBm24L+e4b1jD/ABFhXQsIQmFEIQgEIQgEIQgEIQgEIQgE5oz4/rmJ9YxPxXnS85oz7zzE+sYn4ryxKgNKrnHlH3juEtLSrZx5R947hLRsODuyp6UXmnKG4xvg9sqelHMz5Q3GBFEcWNCOrAdWOKY0sWDAeUxxTGVMWpgSFMeWRlMeQwH1jgjSmOAyocE23Bbz7DesYf4izUCbfgof17DesUPiLA6GhCEw0IQhAIQhAIQhAIQhAIQhAJzRn3nmJ9YxPxXnS85oz7zzE+sYn4ryxKgNKrm/lH3juEtTSq5x5R947hLRP4PbH9KLzTlDcYjg9sf0ovNOUN0CKI4I2IsQHBHBGxFiA4I4DGhFiA8pjyGRxHUMCQpjojCGOqYQ8DNxwS8/w329D+8TSibngh5/hft6P94lV0PCEJhRCEIBCEIBCEIBCEIBCEIBOaM+88xPrGJ+K86XnNGfeeYn1jE/FeWJUBpVc48o+8dwlqaVXN/KPv8AyEtIn8Htj+lF5pyhuMb4PbH9L8o5mnKG4wIgixECLEBwRYjYiwYDgiwY0DFgwHQY4pjIMcUwJCGPKZHQx5TAeBm74Hn9fwv29H+4TRAzd8Dv2hhft6P9whHRMIQmWhCEIBCEIBCEIBCEIBCEIBOaM+88xPrGJ+K86XnNGfeeYn1jE/FeWJUBpVc38o+/8hLU0quceUff8paJ/B7Y/pReacobjE5ALCpf60VmnKG6BEEUIkRQgLEUIgRQgOAzY5EwGIp3ta7AggEEFGGyawGPLikoAVNbVPGIUagLA7YEzMFQMrIAoemlXRGxWa4IXquL9sjqZApYgl9E6z1NpaIAAF9VgLDZJqmBIQx5TI6mOqYEhTN5wL/aGF+3pf3TQLN9wJ/aOF+2p98DouEITKiEIQCEIQCEIQCEIQCEIQCc0Z955ifWMT8V50vOaM+88xPrGJ+K8sSoDSq5v5Rt/wApajKvmw+kbePylGyyU+Ifu90TmnKG4xWU/v8A/D/sETmnKG4wIYihEiZEBYihECKEBYgwBFjs6JgRQgZpqBsAHP2x5Y0I4pgPKY6pjCmOKYEhTLBwHP8A+jhftqcrimWHgJ+0sL9sn5wOjYQhMqIQhAIQhAIQhAIQhAIQhAJzRn3neJ9YxPxXnS85nz7zzE+sYn4ryxKgtKtm5+kbf8paWlWzjyjb/lLRs8m5JPo90TmnKG4xWR8k/d7onNOUNxgQxMiYmYChFCJEyIChFCJEUICxFiNiLEBwSXgaS1Gs1RUHSQW18w5u+RKakmw9vQJNweHU1EpiwLsV0iL2srMSexTAnPlYAJSqH1atFb3N+fXqFuozYcClNLMcM9QFEWqpLuNFVGvWWOoTWY4Nh6oVXNypYEDR2Gx1XN46M6rKG0qtQX0V8XnXxtJTr2G6+yUdC1uFGXJYNjsGLi4+npm4uRfUekEdhjf+L8s/j8H/AD6fznMGLruarMzMWOjc3NzZFHcBECs31m/EYknepbXUX+L8s/j8H/Pp/OH+L8s/j8H/AD6fznMAxVQbKtXsqOPziWxNQ7alQ73Yx8ePn89m3w6h/wAX5Z/H4P8An0/nJNPhBgWUOMZhNE7D4ekAddunpBnKfhW+s34jN7gMQ1BE0atRQ6eF0luSKpfQJ1f6UIksnarte/Z7w2wGEVSawqsxsEw5WqestY2Ub5WP/t7Dq30mGdU5ytVXYDm8XRHfPKcVmlV1Kg+LrtqFyOYE+ybXE4XCjClr07BNPwxe5Or39PRzWicUvLHuvBvhFhMyo+HwtUOuxlIKvSf6rqdan3HaLjXNtObeA3CFssxIrov0ThUr0l1adPbcDZprckdo1XM6Nw2ISqi1abBqbqrqw2MjC4I3gyNHYQhICcz5955ifWMT8V50xOZ8/wDPMT6xifivLEqC0q2ceUbf8paGlXzjyjb/AJS0bLIuSfu90M15Q3GGRcg/d7pnNOUNxgQZkTEyIGRFRMyICxFCIEUICxFiIEyTYXgSsGRa5It4RFN9Vl0lVjfqBJmwx7Uk0Wosq1Q3ihHeoS1iLWLHUbkX65psvNgynktr7dh/KTMKqUXWpotYFvJjxtaso1c+siBPoqrVGbEt9KAFWjUZ6ejT23FyGOs/PaLQca6FqoQrorogBSWF9AE2JJvY98xjq4xNQHQqaKro3qg3JJJ1A83zhhsKjAqW0aY1sVFza9tFR0kkDYdttwQaityiCA2wkEBrAA2PPbV7YkS0V8oougXQxAtdlFRqZFyBfUp1EhV/COiaDwFC9rDV0kj84EeYjtTwKm2gp3OdY1dJ2828r1kO0aVFhcqnY7G/Xu6OqBGm1eoCmHGkLCmQxuPF+lqnX0aiD2iKwuV4cjScNo3Chad2ZmOwDr/9m0k4nLKaofBpVQqC2ixptcc/J54G2zvCYanh3YLRXRVTTZaql6lQlQFIvc3ueaVNsKpN7Dbft6d8RSRDYjm2C/JPUOaWujhMMcMGOjfQLaRYAnpbS/dtr8Tnt2G9S1jLMJQeihKoQb+FqF7GkbkG2vVYdWuencS2dfpGCfDlrth30V13JoVLtTPt0wOoCeE1FS2mw1EC42aXVbnlz4j868HmhpE2XEI9O3NpoPCJ7FVx96ZW3o6FhCEgJzRn/nmJ9YxPxXnS85oz7zzE+sYn4ryxK15lXzjyjb/lLS0q+ceUbf8AKWjY5DyD93umc15Q3GIyNrIx1/u7ATzReZnWO3vgQpmYmYBMzEzAUIoRImRAWJiqdQHSYCLwyadVV7YG1o0FWnciautWK7GNujbNzmB0VtK5iWgNVsVVc28I2vbawJ7RrllytFpsEOoFVdSBqGgb9xB7OqVWmdc2GHzE6Apt+7yWGogc3s6RzQLRjcfTp+OaqNbWETSLMeYawAB1yivXJcknWSSd5N/zkjEOzar90jVKFrHfAsfBnKDjKgS5VPHBqaaqKZFNmXSuCWBIt4oJGs69hggePo9DFdduYka7Ejm5iRIKhrW8axtq165ksdmvdCLVgDoEq+rRYVA1tVmUob+/3dMVjsclMF/CoxsQqrpcogjxiQAAO2aWrj2dAGvpgcsc+/3b5rcQWbadXZCooqkN4rEEc4NuybKk5I1nbrtzE9JGy81lKnc9Q75u6WHtTBgQsXUJ2kx7g1mZwmLo4kX+iqU6pttKqwLDtFx2xjEiRAbGB2qjAgEG4IBBHODCVvi3zH9KyrC1SbsKS0mJ2l6RNJid5S/bCZVZZzPnx/XMT6xifitOmJzNn3nmJ9YxPxXliVBJlYzjltv+Usxlazjltv8AlLRNyU/RtttcA2BJtboEXmG1fvHZbXfXq5ojKTZW2/5J1AttVSdXaYvMf3dusE67jaeuBEhCYgZmREzN4ChMgxF5kGA5eTMjF6xPRIAMn5CfGY74EjNKusiaHEGbLMH8YzU1zAxRpliANplo4NcHqOLxlHBlnVqjMjVhr0SEY2VecXXaTr5rc+myanraodiKT97YvvIls4s/2vhPtG+FUgXCjxFNp+PmSmnfXoYQqxHUTVIHvlpo8UWUBFVkxDkC2m1YgseckKAB2AS/Qk1Xn54nclvfwNa/T4d4peKDJhspV/57GX6Eg8yzriYwNVR+jV69Bxq8cDEId6mx9jCanA8Ri6X6xjy1PnWhh/Bsdzs7AfhM9jhLo5s4yOAAyiojUXZ8LV0tAvy0ZbXViNR1G4Orn6LnR6jTE6A41cm/TMsqgC9SjbEJ9y+n/QX9056wjeKV6JYjXYlZAca5tMUsgOuuEdA8QGML5bUpH/KruB6Dojf3aczNT/8AHeodHGJzfqrDefCg9wmJmtPZJzNwlOhjcSrCxGIxOo/asR7rGdMylcLOLXBZjXOJapiKNVgA5oGnaqQAAzB1PjWAFxbZLB4QawlezYXZj1/Ke+HiTwX8dmHtw3/bkXE8TWVr5TMcYPSfCD/pxqPF8jrizAjX4nsAsO6PZi9yLdBnpeN4uuD+EBqPmuMUbL6WHAPUCadiZUM3Xg/SBFLE5xXbWAFGGpLfXrJansv0XlVVzE3kQ4tuge+JOJbq9hkRNvDSkHw7dXsi1qNzg9lh3wJelANI+mfqn2iAduj3j5QJQabTIqFwTci99e33TRabdA9ssuWEfo6uu0FkcfVa9x7RY+3oMoi4/CMDtB9009ai19h7Bfum9xNa8j4akHcBmCpcaTteyLexJt3QE0kNOiqm4LnwhGzxRcLfedLV1CWziqwzVM3w2iL6Bq1G/wBKLScXPayjtE9GynDcGKyqFp4Wqyqis7L4R20VC3YAmx1CWLKHyTBlmw5wFBmADMNCiWA1gEtY26oXFohG6FZKih0ZWQi4ZGDBh0gjUY5MghCEAhCEDDKCCCAQdRB1ggzmDhZkzZfj62H0W0AxKGxOlSbWhv02IB6wZ1BPOeOLg02IoDGUlvUogioALk0dt/um53E9EsHhtemTsB7pGGE16yJNNTpmKZuZUes8Q+H0DiTzFaA99SYlp4qsmbDYLwjqQ9Yh7EWIpgWS++5O4iElVasdSqspFKoEbmYqHt2GV/EZbmbbMdYf6aKr3GWqYkFHr8F8wfbjr+kjH/mmvr8BMe2zHU19HDp3m5npEzLtHi+J4matRi74su52u4d2PaWvI54jmO3Ej8J+c9whGjxFeIwc+I/p/wDMcXiNTnxDeye1QjR42nEhS/379gEdXiSoc9er7RPX4Ro8lXiUwvPVq/ijy8S+D+vU/EZ6pCNHlw4msD0v+Ix2lxTYWnfwZYXFj4xsw6xzz0yEaPH8TxOlmutchegi/vmxwfFbRRQrJTcDX412uenXPT4RoouG4A4ZP9mofgWbfCcHKVPk0aQ3IoljhJoiUaTqLC1o8A0dhARYzBDRyEBllfpjTJV5iJLhA1zJX5iIzUp4rmYTbwgeV53xWpiHNSnakx1kU+QT0hebssI7wb4rqeGqCrVtVYG4D8gHp0eftuJ6fCXQ1SDc8I7CQf/Z",
                  recipient: "Israel Rivera",
                  itemDestination: "Santo Domingo, DR, 11507",
                  itemName: "PlayStation 4",
                  itemValue: 400,
                  itemCurrencyValue: "USD",
                  itemDimension: "Medium",
                  itemWeight: "1 Pound",
                  itemSinceDate: "1d ago"
                },
                {
                  itemId: 1,
                  itemImage:
                    "data:image/jpeg;base64,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",
                  recipient: "Israel Rivera",
                  itemDestination: "Santo Domingo, DR, 11507",
                  itemName: "PlayStation 4",
                  itemValue: 400,
                  itemCurrencyValue: "USD",
                  itemDimension: "Medium",
                  itemWeight: "1 Pound",
                  itemSinceDate: "1d ago"
                }
              ]
        }
    }
    render(){   
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
                            <Title>My Account Info</Title>
                        </Body>
                    <Right />
                </Header>
                <Content>
                <ScrollView>
                    <FlatList
                        keyExtractor={this._keyExtractor}
                        data={this.state.items}
                        renderItem={renderRecipientItem}
                        ItemSeparatorComponent={Divider}
                    />
                    </ScrollView>

                </Content>

            </Container>

        );

    }
}


function renderRecipientItem({ item }) {
    return (
      <View style={{ flex: 1, height: 100, margin: 5, flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Image
            source={{ uri: item.itemImage }}
            style={{ width: "100%", height: 100, resizeMode: "stretch" }}
          />
        </View>
        <View style={{ flex: 3, flexDirection: "column", padding: 5 }}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <Text style={{ fontWeight: "bold" }}>
            Playstation 4 Slim - USD 400{" "}
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <Text style={{ fontSize: 15 }}>Medium - 1 Pound </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <View style={{ flexDirection: "row", flex: 2 }}>
              <Badge
                info
                style={{ margin: 3, backgroundColor: globalColors.baseBlue }}
              >
                <Text style={{ fontSize: 15 }}>Edit</Text>
              </Badge>
              <Badge
                style={{ margin: 3, backgroundColor: globalColors.baseBlue }}
              >
                <Text style={{ fontSize: 15 }}> Remove/Cancel</Text>
              </Badge>
            </View>
          </View>
        </View>
      </View>
    );
  }

const TabNavigator = createBottomTabNavigator({
    Home: RecipientsTab,
    Settings: TransporterTab,
    Recipients:MyTripsPackagesTab
  });


export default TabNavigator