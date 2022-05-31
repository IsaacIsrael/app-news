import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { Color } from '../../constants/Color';

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 28,
    fontWeight: 'bold',
    color: Color.TEXT,
  },
});

const Title: React.FC<TextProps> = ({ style, ...props }) => {
  return <Text style={[styles.text, style]} {...props} />;
};

export default Title;
