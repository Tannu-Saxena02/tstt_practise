import React from 'react';
import {Text} from 'react-native';
import Typography, {TextStyles} from '../components/atoms/Typography';

const FAQs_Screen = () => {
  return (
    <Typography
      text={'helloooo FAQS'}
      textStyle={[{color: 'green'}, TextStyles.fontFamily_StagSans_Light]}
    />
  );
};
export default FAQs_Screen;
