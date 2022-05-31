import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { Color } from '../../constants/Color';

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    letterSpacing: 0.25,
    color: Color.TEXT,
  },
});

const Small: React.FC<TextProps> = ({ style, ...props }) => {
  return <Text style={[styles.text, style]} {...props} />;
};

export default Small;
