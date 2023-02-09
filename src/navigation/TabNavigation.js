import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BillPayScreen from '../screens/BillPayScreen';
import Home from '../screens/Home';
import HelpAndSupportScreen from '../screens/HelpAndSupportScreen';
import PromotionScreen from '../screens/PromotionScreen';
import {RFValue} from 'react-native-responsive-fontsize';
import RechargePayScreen from '../screens/RechargePayScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from '@react-navigation/native';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';

import HomeLightActive from '../assets/svgImages/LightTheme/Active/Home.svg';
import HomeLightInactive from '../assets/svgImages/LightTheme/Inactive/Home.svg';
import HomeDarkActive from '../assets/svgImages/DarkTheme/Active/Home.svg';
import HomeDarkInactive from '../assets/svgImages/DarkTheme/Inactive/Home.svg';

import PromotionLightActive from '../assets/svgImages/LightTheme/Active/Promotions.svg';
import PromotionLightInactive from '../assets/svgImages/LightTheme/Inactive/Promotions.svg';
import PromotionDarktActive from '../assets/svgImages/DarkTheme/Active/Promotions.svg';
import PromotionDarkInactive from '../assets/svgImages/DarkTheme/Inactive/Promotions.svg';

import BillPayLightActive from '../assets/svgImages/LightTheme/Active/Pay Bills.svg';
import BillPayLightInactive from '../assets/svgImages/LightTheme/Inactive/Pay Bills.svg';
import BillPayDarkActive from '../assets/svgImages/DarkTheme/Active/Pay Bills.svg';
import BillPayDarkInactive from '../assets/svgImages/DarkTheme/Inactive/Pay Bills.svg';

import RechargeLightActive from '../assets/svgImages/LightTheme/Active/Top Up.svg';
import RechargeLightInactive from '../assets/svgImages/LightTheme/Inactive/Top Up.svg';
import RechargeDarkActive from '../assets/svgImages/DarkTheme/Active/Top Up.svg';
import RechargeDarkInactive from '../assets/svgImages/DarkTheme/Inactive/Top Up.svg';

import SupportLightActive from '../assets/svgImages/LightTheme/Active/Support.svg';
import SupportLightInactive from '../assets/svgImages/LightTheme/Inactive/Support.svg';
import SupportDarkActive from '../assets/svgImages/DarkTheme/Active/Support.svg';
import SupportDarkInactive from '../assets/svgImages/DarkTheme/Inactive/Support.svg';
import HelpSupportNewScreen from '../screens/HelpSupportNewScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
  svgStyling: {
    height: RFValue(22),
    width: RFValue(22),
  },
});

const HomeScreenNavigator = () => {
    const {colors} = useTheme();
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="AccountAddedScreen" component={AccountAddedScreen} /> */}
      </Stack.Navigator>
    );
  };
  
  const RechargeScreenNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName="RechargePayScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="RechargePayScreen" component={RechargePayScreen} />
      </Stack.Navigator>
    );
  };
  
  const PromotionNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName="Promotions"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Promotions" component={PromotionScreen} />
      </Stack.Navigator>
    );
  };
  
  const SupportScreenNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName="HelpSupportNewScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="HelpSupportNewScreen"
          component={HelpSupportNewScreen}
        />
        {/* <Stack.Screen
          name="HelpAndSupportScreen"
          component={HelpAndSupportScreen}
        /> */}
      </Stack.Navigator>
    );
  };
const TabNavigation = () => {
    console.log('Tab Navigation');
    const {colors} = useTheme();
    const col = colors.background == '#F4F4F4' ? 'green' : 'white';
    return (
        <Tab.Navigator
        screenOptions={{
          activeTintColor: 'black',
          headerShown: false,
          tabBarActiveTintColor: col,
          tabBarLabelStyle: {fontSize: RFValue(10)},
          tabBarStyle: [
            {
              height: responsiveScreenHeight(7.9),
              padding: '2%',
              paddingBottom: '2.9%',
              borderColor: colors.background == '#F4F4F4' ? '#FFFFFF' : '#2E2F2F',
            },
            {backgroundColor: colors.textGrey},
          ],
        }}>
        {/* For Home screen Tab */}
  
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreenNavigator}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused, color, size}) => (
              <View
                style={{
                  width: '10%',
                  height: '10%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {colors.background == '#F4F4F4' ? (
                  focused ? (
                    <HomeLightActive style={styles.svgStyling} />
                  ) : (
                    <HomeLightInactive style={styles.svgStyling} />
                  )
                ) : focused ? (
                  <HomeDarkActive style={styles.svgStyling} />
                ) : (
                  <HomeDarkInactive style={styles.svgStyling} />
                )}
              </View>
            ),
          }}
        />
  
        <Tab.Screen
          name="Promotions"
          component={PromotionNavigator}
          options={{
            tabBarLabel: 'Promotions',
            tabBarIcon: ({focused, color, size}) => (
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {colors.background == '#F4F4F4' ? (
                  focused ? (
                    <PromotionLightActive
                      style={{
                        height: RFValue(35),
                        width: RFValue(35),
                      }}
                    />
                  ) : (
                    <PromotionLightInactive
                      style={{
                        height: RFValue(30),
                        width: RFValue(30),
                      }}
                    />
                  )
                ) : focused ? (
                  <PromotionDarktActive
                    style={{
                      height: RFValue(30),
                      width: RFValue(30),
                    }}
                  />
                ) : (
                  <PromotionDarkInactive
                    style={{
                      height: RFValue(30),
                      width: RFValue(30),
                    }}
                  />
                )}
              </View>
            ),
          }}
        />
  
        {/* For PayBills screen Tab */}
  
        <Tab.Screen
          name="BillPayScreen"
          component={BillPayScreen}
          options={{
            tabBarLabel: 'Pay Bills',
            tabBarIcon: ({focused, color, size}) => (
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {colors.background == '#F4F4F4' ? (
                  focused ? (
                    <BillPayLightActive style={styles.svgStyling} />
                  ) : (
                    <BillPayLightInactive style={styles.svgStyling} />
                  )
                ) : focused ? (
                  <BillPayDarkActive style={styles.svgStyling} />
                ) : (
                  <BillPayDarkInactive style={styles.svgStyling} />
                )}
              </View>
            ),
          }}
        />
  
        {/* For Recharge screen Tab */}
  
        <Tab.Screen
          name="RechargePayScreen"
          component={RechargeScreenNavigator}
          options={{
            unmountOnBlur: true,
            tabBarLabel: 'Top Up',
            tabBarIcon: ({focused, color, size}) => (
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {colors.background == '#F4F4F4' ? (
                  focused ? (
                    <RechargeLightActive style={styles.svgStyling} />
                  ) : (
                    <RechargeLightInactive style={styles.svgStyling} />
                  )
                ) : focused ? (
                  <RechargeDarkActive style={styles.svgStyling} />
                ) : (
                  <RechargeDarkInactive style={styles.svgStyling} />
                )}
              </View>
            ),
          }}
        />
  
        {/* For Help and Support screen Tab */}
  
        <Tab.Screen
          name="HelpSupportNewScreen"
          component={SupportScreenNavigator}
          options={{
            tabBarLabel: 'Support',
            tabBarIcon: ({focused, color, size}) => (
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {colors.background == '#F4F4F4' ? (
                  focused ? (
                    <SupportLightActive style={styles.svgStyling} />
                  ) : (
                    <SupportLightInactive style={styles.svgStyling} />
                  )
                ) : focused ? (
                  <SupportDarkActive style={styles.svgStyling} />
                ) : (
                  <SupportDarkInactive style={styles.svgStyling} />
                )}
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  export default TabNavigation;