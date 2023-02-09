import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { UIActivityIndicator } from 'react-native-indicators';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';

const Loader = ({ loading, loaderColor, headerPresent, color }) => {
  console.log(color, typeof color)
  return loading ? (
    <SafeAreaView
      style={{
        ...styles.containerStyle,
        height: headerPresent ? '80%' : '100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        top: headerPresent
          ? Platform.OS == 'ios'
            ? Dimensions.get('screen').height * 0.05
            : Dimensions.get('screen').height * 0.07
          : Platform.OS == 'ios'
            ? Dimensions.get('screen').height * 0.05
            : null,
      }}>
      <UIActivityIndicator color={"#00E556"} size={responsiveScreenHeight(6)} />
      {/* </View> */}
    </SafeAreaView>
  ) : null;
};

const styles = StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    zIndex: 3,
    width: '100%',
  },
});

export default Loader;
