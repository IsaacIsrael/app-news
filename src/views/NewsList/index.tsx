import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import Container from '../../components/Container';
import SearchInput from '../../components/SearchInput';

import { ViewName } from '../../constants/ViewName';
import { FCView } from '../../types/View';

const styles = StyleSheet.create({});

const NewsListView: FCView = () => (
  <Container title="News">
    <SearchInput placeholder='Search' />
  </Container>
);

NewsListView.displayName = ViewName.NEW_LIST;

export default NewsListView;
