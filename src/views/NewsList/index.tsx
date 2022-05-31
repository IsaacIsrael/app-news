import React, { useEffect, useState } from 'react';
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
import Touchable from '../../components/button/Touchable';
import { pushSingleView } from '../../navigation';
import { NewDetailProps } from '../NewDetail';
import CategoryItem from '../../components/CategoryItem';
import Row from '../../components/Row';

const styles = StyleSheet.create({
  news: {
    marginTop: Sizes.GUTTER * 2,
  },
  categories:{
    flexWrap: 'wrap',
  },
  separator: {
    marginVertical: Sizes.GUTTER,
  },
});

const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']

const NewsListView: FCView = ({ componentId}) => {
  const [ query , setQuery] = useState<string>('')
  const [ filterCategories , setFilterCategories] = useState<string[]>([])
  const news = useAppSelector<New[]>(({news})=> news.list);
  const isFetching = useIsRequestLoading(newsActions.FETCH_NEWS);
  const dispatch  = useDispatch();
  
 

  const fetchNews = () => {
    dispatch(newsReducer.fetchNews(query, filterCategories));
  }

  useEffect(()=>{
    fetchNews();
  },[filterCategories, query]);
  
  useEffect(()=>{
    fetchNews();
  },[]);

  const onSearchNews = async (text: string)=>{
    setQuery(text);
  }

  const onItemPress = (article:New)=> ()=>{
    pushSingleView<NewDetailProps>(componentId,ViewName.NEW_DETAIL,{
      article,
    })
  }


  const onSelected = (category: string)=>(selected: boolean)=>{
    if(selected){
      setFilterCategories([...filterCategories, category])
    }else{
      setFilterCategories(filterCategories.filter( item => item !== category))
    }
  }

  const renderNews: ListRenderItem<New> = ({ item: article }) => (
    <Touchable onPress={onItemPress(article)}>
       <NewItem article={article} />
    </Touchable>
  );

  return (
    <Container title="News">
      <SearchInput placeholder='Search' onSearch={onSearchNews} />
      <Row style={styles.categories}>
        {categories.map(( category => <CategoryItem key={category} category={category}  onSelected={onSelected(category)}/>))}
      </Row>
      <FlatList 
        data={news}
        style={styles.news}
        refreshing={isFetching}
        onRefresh={fetchNews}
        renderItem={renderNews}
        ItemSeparatorComponent={() => <View style={styles.separator} />}   
      />
    </Container>
  )

};

NewsListView.displayName = ViewName.NEW_LIST;

export default NewsListView;
