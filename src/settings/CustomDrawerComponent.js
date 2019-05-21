import React from 'react';
import {StatusBar,  View, SafeAreaView,ScrollView,Dimensions, Image,StyleSheet, Text,FlatList,Platform} from 'react-native';
import  {Icon, Badge, Text as Test, Button as RnButton, Left,List,ListItem} from 'native-base'
import globalColors from '../utils/colors';
import  {AppStack} from '../utils/screens'

import DrawerRouteConfig from '../settings/DrawerNavigationConfig'
import {HrView} from '../utils/helpers'

var datas = []


for (var prop in DrawerRouteConfig){
  
  datas.push({
      name: DrawerRouteConfig[prop].drawerMenuConfig.drawerMenuTitle,
      route: prop,
      icon: DrawerRouteConfig[prop].drawerMenuConfig.titleIcon || "ban",
      iconType:DrawerRouteConfig[prop].drawerMenuConfig.titleIconType || "FontAwesome" ,
      showInMenu: DrawerRouteConfig[prop].drawerMenuConfig.showInDrawerMenu === undefined ?  true : DrawerRouteConfig[prop].drawerMenuConfig.showInDrawerMenu
  })
}

const CustomDrawerComponent = props =>(

    <ScrollView >
      <SafeAreaView style={{flex:1}}>
      <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
        <View style={styles.profileImage}>
            <Image source={require("../images/user.png")} style={{width: 72,height: 72 }}  />
          </View>
          <View style={{flex:1, flexDirection:'column', marginTop:30, marginLeft:15}}>
                <Text style={{padding:4, fontWeight:"bold"}}>Israel Rivera</Text>
                <Text style={{padding:4, fontWeight:"bold"}}  onPress={() =>{ props.navigation.navigate(AppStack.ProfileSetting) }}>Profile Settings</Text>
                <Text style={{padding:4, fontWeight:"bold"}}  onPress={() =>{ props.navigation.navigate(AppStack.Profile) }}>Public profile view</Text>
          </View>
          <View  style={{padding:20, position:'absolute', right:0}}>
          <RnButton transparent iconLeft>
              <Icon style={{color:'black'}} type="FontAwesome" name="bell"   />
              <Text>5</Text>
            </RnButton>
          </View>
      </View>
          <HrView/>
          <List>
            <FlatList
              data={datas}
              keyExtractor={item => item.name}
              renderItem={({item}) =>
                (item.showInMenu && 
                    <ListItem
                      button
                      noBorder
                      onPress={()=>{props.navigation.navigate(item.route)}}
                    >
                      <Left>
                        <Icon
                          active
                          type={item.iconType}
                          name={item.icon}
                          style={{ color: "#777", fontSize: 26, width: 30 }}
                        />
                        <Text style={styles.text}>
                          {item.name}
                        </Text>
                      </Left>
                    </ListItem>
                  )
                }
            />
              <HrView/>
              <ListItem
                  button
                  noBorder
                  onPress={()=>{}}
                >
                  <Left>
                    <Icon
                      active
                      type="FontAwesome"
                      name="power-off"
                      style={{ color: "#777", fontSize: 26, width: 30 }}
                    />
                    <Text style={styles.text}>
                      Log out
                    </Text>
                  </Left>
                </ListItem>

          </List>

        </SafeAreaView>
    </ScrollView>
  
  );

  const styles = StyleSheet.create({
    profileImage:{
      height:100, 
      backgroundColor:globalColors.white, 
      flexDirection:"column",
      justifyContent:"flex-end",
      marginLeft:10 },
      text: {
        fontWeight: Platform.OS === "ios" ? "500" : "400",
        fontSize: 13,
        marginLeft: 20,
        color:'black',
        fontWeight:'bold'
      },
    })

  export default CustomDrawerComponent;