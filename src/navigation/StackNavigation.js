import React,{useState} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Dimensions, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import DrawerContentScreen from '../screens/DrawerContentScreen';
import FAQs_Screen from '../screens/FAQs_Screen';
import InAppNotificationScreen from '../screens/InAppNotificationScreen';
// import {Settings} from '../screens/Settings';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RFValue } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LightLogo from '../assests/svgImages/lightTheme/bMobile.svg';
import { StackActions, useTheme } from '@react-navigation/native';


const Stack = createStackNavigator();

const StackNavigation=({navigation}) =>{
  const { colors } = useTheme();
  return (
    // <NavigationContainer>
      <Stack.Navigator
       initialRouteName={Home}
       screenOptions={{
         headerShown: true,
         }}>
        <Stack.Screen name="Home" component={Home} 
        options={({ navigation, route }) => ({
          headerTitle: () => {
            return (
              <View style={styles.headerCenterStyle}>
                <View>
                  <LightLogo width={RFValue(30)} height={RFValue(100)}/>
                </View>
                <View>
                  <Text
                    style={{
                      ...styles.centerText,
                      color:
                        colors.background == '#F4F4F4' ? '#4D4848' : '#fff',
                    }}>
                    mobile
                  </Text>
                </View>
              </View>
            );
          },
          headerStyle: {
            ...styles.headerStyle,
            backgroundColor: colors.background,
          },
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={styles.HeaderIconsViewLeft}
                onPress={() => navigation.navigate('DrawerContentScreen')}
                >
                <LinearGradient
                  colors=
                   { colors.background == '#F4F4F4'
                      ? ['#90DEA4', '#48BC5F']
                      : ['#00E556', '#367B39']
                  }
                  style={styles.profileContainer}
                  >
                  <Icon name={'user'} size={RFValue(27)} color={'#FFFFFF'} />
                </LinearGradient>
              </TouchableOpacity>
            );
          },
          headerRight: () => {
            return (
              <View
                style={{
                  ...styles.HeaderIconsViewRight,
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('FAQs_Screen')}
                  style={{
                    width: '37%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <AntDesign
                    name={'questioncircleo'}
                    size={RFValue(24)}
                    color={
                      colors.background == '#F4F4F4' ? '#4D4848' : '#FFFFFF'
                    }
                  />
                </TouchableOpacity>
                 <TouchableOpacity
                  onPress={() => navigation.navigate('InAppNotificationScreen')}
                  style={{
                    width: '42%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Ionicons
                    name={'ios-notifications-outline'}
                    size={RFValue(28)}
                    color={
                      colors.background == '#F4F4F4' ? '#4D4848' : '#FFFFFF'
                    }
                    style={{ marginRight: RFValue(2) }}
                  />
                  {/* {getNotification() && <NotificationView />} */}
                </TouchableOpacity> 
              </View>
            );
          },
          headerBackTitleVisible: false,
        })}
      />
        <Stack.Screen name="DrawerContentScreen" component={DrawerContentScreen} />
        <Stack.Screen name="InAppNotificationScreen" component={InAppNotificationScreen} />
        <Stack.Screen name="FAQs_Screen" component={FAQs_Screen} />

        {/* <Stack.Screen name="Settings" component={Settings} /> */}
        
      </Stack.Navigator>
    // </NavigationContainer>
    // <Text>Hii Notifications</Text>
  );
}
const styles=StyleSheet.create({
  HeaderIconsViewLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '12%',
  },
  headerCenterStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderIconsViewRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: RFValue(5),
  },
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    height:
      Platform.OS == 'android'
        ? Dimensions.get('window').height * 0.09
        : Dimensions.get('window').height * 0.13,
  },
  profileContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: RFValue(50),
    width: RFValue(50),
    borderRadius: RFValue(25),
  },
  centerText: {
    fontSize: RFValue(17),
    marginLeft: '10%',
  },

})
export default StackNavigation;

