import React from 'react';
import {StatusBar,  View, SafeAreaView,ScrollView,Dimensions, Image,StyleSheet, Text} from 'react-native';
import  {Icon, Badge, Text as Test, Button as RnButton, ListItem, Left} from 'native-base'


const CustomDrawerComponent = props =>(
    <ScrollView >
      <SafeAreaView style={{flex:1}}>
      <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
        <View style={styles.profileImage}>
            <Image source={require("./src/images/user.png")} style={{width: 72,height: 72 }}  />
          </View>
          <View style={{flex:1, flexDirection:'column', marginTop:30, marginLeft:0}}>
                <Text style={{padding:4, fontWeight:"bold"}}>Israel Rivera</Text>
                <Text style={{padding:4, fontWeight:"bold"}}>Profile Settings</Text>
                <Text style={{padding:4, fontWeight:"bold"}}>Public profile view</Text>
          </View>
          <View  style={{padding:20, position:'absolute', right:0}}>
          <RnButton transparent iconLeft>
              <Icon style={{color:'black'}} type="FontAwesome" name="bell"   />
              <Text>5</Text>
            </RnButton>
          </View>
      </View>
        <DrawerItems {...props}/>
            </SafeAreaView>
    </ScrollView>
  
  );

  const styles = StyleSheet.create({
    profileImage:{
      height:100, 
      backgroundColor:globalColors.white, 
      flexDirection:"column",
      justifyContent:"flex-end",
      marginLeft:10 }
  })

  export default CustomDrawerComponent;