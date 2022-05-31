import React, { useContext } from 'react';

import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import _ from 'lodash';
import { Sizes } from '../constants/Sizes';
import Row from './Row';
import Title from './texts/Title';
import { popView } from '../navigation';
import { NavigationContext } from 'react-native-navigation-hooks/dist';
import Small from './texts/Small';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Sizes.GUTTER,
    // paddingTop: Sizes.GUTTER,
    elevation: 1,
    zIndex: 1,
  },
  title: {
    marginTop: Sizes.GUTTER * 0.25,
    textTransform: 'capitalize',
  },
  button: {
    width: 40,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 40,
  },
});

type Props = {
  title?: string;
  style?: StyleProp<ViewStyle>;
};

const Header: React.FC<Props> = ({ title, style }) => {
  const { componentId } = useContext(NavigationContext);
  const onBackClick = (): void => {
    popView(componentId || '');
  };

  return (
    <Row style={[styles.container, style]}>
      <Small />
      <Title style={styles.title}>{title}</Title>
      <View style={styles.icon} />
    </Row>
  );
};

Header.defaultProps = {
  title: '',
  style: {},
};

export default Header;
