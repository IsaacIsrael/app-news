import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Container from '../../components/Container';

import { ViewName } from '../../constants/ViewName';
import { FCView } from '../../types/View';
import { New } from '../../types/News';
import { Sizes } from '../../constants/Sizes';
import Body from '../../components/texts/Body';
import Title from '../../components/texts/Title';
import Small from '../../components/texts/Small';

const styles = StyleSheet.create({
  news: {
    marginTop: Sizes.GUTTER * 2,
  },
  image: {
    marginTop: Sizes.GUTTER,
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    marginTop: Sizes.GUTTER,
    flexShrink: 1,
  },
  text:{
    marginTop: Sizes.GUTTER,
  },
});

export type NewDetailProps = {
    article: New;
}

const NewDetailView: FCView<NewDetailProps> = ({ article}) => {

  return (
    <Container showBackButton scroll>
        <Image source={{ uri: article.imageUrl}} style={styles.image} />
        <Title style={styles.title}>{article.title}</Title>
        <Small>{article.author}</Small>
        <Small>{article.publishedDate.toDateString()}</Small>
        <Body style={styles.text}>{article.description}</Body>
        <Body style={styles.text}>{article.content}</Body>
    </Container>
  )

};

NewDetailView.displayName = ViewName.NEW_DETAIL;

export default NewDetailView;
