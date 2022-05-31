import React, { useEffect } from 'react';
import {  FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';
import Container from '../../components/Container';
import SearchInput from '../../components/SearchInput';

import { ViewName } from '../../constants/ViewName';
import { FCView } from '../../types/View';
import newsServices from '../../services/newsServices';
import { New } from '../../types/News';
import useAppSelector from '../../hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import { Creators as newsReducer, Types as newsActions } from '../../store/duckers/news';
import news from '../../store/duckers/news';
import useIsRequestLoading from '../../hooks/useIsRequestLoading';
import { Sizes } from '../../constants/Sizes';
import { Color } from '../../constants/Color';
import Body from '../../components/texts/Body';
import NewItem from '../../components/NewItem';

const styles = StyleSheet.create({
  news: {
    marginTop: Sizes.GUTTER * 2,
  },
  separator: {
    marginVertical: Sizes.GUTTER,
  },
});

const NewsListView: FCView = () => {
  const news = useAppSelector<New[]>(({news})=> news.list);
  const isFetching = useIsRequestLoading(newsActions.FETCH_NEWS);
  const dispatch  = useDispatch();


  const fetchNews = (query?:string) => {
    dispatch(newsReducer.fetchNews(query));
  }
  
  useEffect(()=>{
    fetchNews();
  },[]);

  const onSearchNews = async (query: string)=>{
    fetchNews(query);
  }

  const renderCoins: ListRenderItem<New> = ({ item: article }) => (
    // <Touchable onPress={onItemPress(coin)}>
       <NewItem article={article} />
    // </Touchable>
  );

  return (
    <Container title="News">
      <SearchInput placeholder='Search' onSearch={onSearchNews} />
      <FlatList 
        data={news}
        style={styles.news}
        refreshing={isFetching}
        onRefresh={fetchNews}
        renderItem={renderCoins}
        ItemSeparatorComponent={() => <View style={styles.separator} />}   
      />
    </Container>
  )

};

NewsListView.displayName = ViewName.NEW_LIST;

export default NewsListView;
