import React, {useState,useEffect} from 'react';
import {Text, Appearance, StyleSheet} from 'react-native';
import StackNavigation from './StackNavigation';
import { darkTheme, lightTheme } from '../utils/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
const colorScheme = Appearance.getColorScheme();
import {EventRegister} from 'react-native-event-listeners';

import {ASYNC_KEY} from '../utils/string';
import Loader from '../components/molecules/Loader';

const Route = () => {
  const [darkThemeSelected, setDarkThemeSelected] = useState('');
  const [isResponseReceived, setisResponseReceived] = useState(false);
  const [loading, setLoading] = useState(true);
  console.log('color scheme' + colorScheme);
  useEffect(() => {
    getSavedTheme();
    let receivedEvent = EventRegister.addEventListener('changeTheme', data => {
      setDarkThemeSelected('' + data);
     AsyncStorage.setItem(ASYNC_KEY.SELECTED_THEME, '' + data);
      console.log("in async-----",data,"",ASYNC_KEY.SELECTED_THEME);
    });
    // return () => {
    //   true;
    // };
  }, []);
  const getSavedTheme = async () => {
    try {
      let getsavedTheme = await AsyncStorage.getItem(ASYNC_KEY.SELECTED_THEME);
      console.log('getsaved theme is-----' + getsavedTheme);
      if (getsavedTheme != null) {
        setDarkThemeSelected('' + getsavedTheme);
        console.log('getSavedTheme ===>success ==> ');
      }
      setisResponseReceived(true);
      setLoading(false);
    } catch (e) {
      setisResponseReceived(true);
      setLoading(false), console.log('My Error+_)(()) ', e);
    }
    console.log("isrequest"+isResponseReceived);
  };
  console.log('Routes=== ' + isResponseReceived);
  if (isResponseReceived) {
    appTheme =
      darkThemeSelected == ''
        ? colorScheme == 'dark'
          ? darkTheme
          : lightTheme
        : darkThemeSelected && darkThemeSelected === 'true'
          ? darkTheme
          : lightTheme;
    console.log('setTheme ===> ==> ',JSON.stringify(appTheme));

    return (
      <NavigationContainer theme={appTheme}>
        <StackNavigation/>
      </NavigationContainer>
    );
  } 
//   else console.log("else partttt",isResponseReceived);
return <Loader style={styles.loaderView} loading={loading} />;
};
const styles=StyleSheet.create({
    loaderView: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
});
export default Route;
