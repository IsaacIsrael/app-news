import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import { ViewName } from '../../constants/ViewName';
import { FCView } from '../../types/View';

const styles = StyleSheet.create({});

const NewsListView: FCView = () => (
  <SafeAreaView>
    <Text>App.tsx</Text>
  </SafeAreaView>
);

NewsListView.displayName = ViewName.NEW_LIST;

export default NewsListView;
