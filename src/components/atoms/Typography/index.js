import * as React from 'react';
import { StyleSheet, Text as ReactNativeText } from 'react-native';
import theme from '../../../utils/theme';
import { RFValue } from 'react-native-responsive-fontsize';

const Typography = ({ text, textStyle, ...restProps }) => {
  return (
    <ReactNativeText style={textStyle} {...restProps}>
      {text}
    </ReactNativeText>
  );
};
export default React.memo(Typography);

export const TextStyles = StyleSheet.create({
  headerTextWhite: {
    marginTop: 5,
    fontSize: 24,
    marginStart: 6,
    fontWeight: 'bold',
    color: theme.palette.WHITE,
  },
  headerTextGreen: {
    marginTop: 5,
    fontSize: 13,
    justifyContent: 'center',
    fontWeight: 'bold',
    color: theme.palette.BACKGROUND_GREEN,
  },
  titleTextDarkGreen: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.palette.HEADER_TEXT_DARK_GREEN,
  },
  titleTextWhite: {
    fontSize: RFValue(20),
    color: theme.palette.WHITE,
  },
  titleTextForPasswordChanged: {
    fontSize: RFValue(20),
    color: theme.palette.WHITE,
    textAlign: 'center',
  },
  textDarkGreen: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.palette.HEADER_TEXT_DARK_GREEN,
  },
  descTextGrey: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.palette.DESCRIPTION_TEXT_GREY,
  },
  bodyTextDarkGreyFifteen: {
    fontSize: 14,
    color: theme.palette.DARK_GREY,
  },
  headerTextDescGrey: {
    fontSize: 13,
    fontWeight: '500',
    color: theme.palette.DESCRIPTION_TEXT_GREY,
  },
  headerTextUpload: {
    fontSize: 13,
    fontWeight: '500',
    color: theme.palette.headerTextGreen,
  },
  headerUpload: {
    fontSize: 13,
    fontWeight: '400',
    color: 'green',
  },
  headerTextDescGreyUpload: {
    fontSize: 10,
    fontWeight: '400',
    marginBottom: 2,
    color: theme.palette.DESCRIPTION_TEXT_GREY,
  },
  otpNumberGrey: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.palette.DESCRIPTION_TEXT_GREY,
  },
  subHeadingGreen: {
    fontSize: 19,
    color: theme.palette.BACKGROUND_GREEN,
    fontWeight: 'bold',
  },
  smallHeadings: {
    fontSize: 15,
    color: theme.palette.BACKGROUND_GREEN,
    marginLeft: 20,
  },
  headingDarkgrey: {
    fontSize: 16,
    color: theme.palette.TEXT_GREY,
  },
  headingDarkgreyLarge: {
    fontSize: 16,
    color: theme.palette.DARK_GREY_TEXT,
    fontWeight: '600',
  },
  labelTextGreen: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.palette.BACKGROUND_GREEN,
  },
  timerText: {
    color: theme.palette.BACKGROUND_GREEN,
    fontSize: 12,
    fontWeight: '500',
  },
  whiteButton: {
    color: theme.palette.WHITE,
    fontSize: 16,
    fontWeight: '600',
  },
  contentTextGrey: {
    fontSize: 15,
    fontWeight: '600',
    color: theme.palette.DESCRIPTION_TEXT_GREY,
  },
  descTextGreen: {
    fontSize: 12,
    fontWeight: 'bold',

    color: theme.palette.BACKGROUND_GREEN,
  },
  labelTextGrey: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.palette.DESCRIPTION_TEXT_GREY,
  },
  uploadDocsDesc: {
    fontSize: 12,
    fontWeight: '400',
    color: theme.palette.DESCRIPTION_TEXT_GREY,
  },
  titleTextBlackFourteen: {
    color: theme.palette.BLACK,
    fontWeight: 'bold',
    fontSize: 14,
  },
  bodyTextGreyEleven: {
    fontSize: 12,
    color: theme.palette.LIGHT_GREY2,
  },
  bodyTextGreyThirteen: {
    fontSize: 14,
    color: theme.palette.DARK_GREY,
  },
  fontFamily_StagSans_SemiBold: {
    fontFamily: 'StagSans-SemiBold',
  },
  fontFamily: {
    fontFamily: 'StagSans-SemiBoldItalic',
  },
  fontFamily_StagSans_Light: {
    fontFamily: 'StagSans-Light',
  },
  fontFamily_StagSans_Regular: {
    fontFamily: 'StagSans-Regular',
  },
  fontFamily_StagSans_Medium: {
    fontFamily: 'StagSans-Medium',
  },
  manageAccountTitle: {
    fontSize: RFValue(23),
    fontFamily: 'StagSans-SemiBold',
  },
  manageAccountTitle1: {
    fontSize: RFValue(14),
    fontFamily: 'StagSans-Medium',
    color: '#FFF',
    marginLeft: '7%',
  },
  manageAccountTitle2: {
    fontSize: RFValue(14),
    fontFamily: 'StagSans-Regular',
    color: '#FFF',
    marginLeft: '7%',
  },
  payDueAmountButton: {
    fontSize: RFValue(17),
    // fontWeight: '700',
    fontFamily: 'StagSans-SemiBold',
  },
});
