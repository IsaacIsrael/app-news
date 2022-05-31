import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Sizes } from '../constants/Sizes';
import { New } from '../types/News';
import Row from './Row';
import Body from './texts/Body';
import Small from './texts/Small';

const styles = StyleSheet.create({
  image: {
    width: '30%', 
    aspectRatio: 1,
  },
  title:{
    marginBottom: Sizes.GUTTER * 0.5,
  },
  date:{
    marginBottom: Sizes.GUTTER * 0.5,
  },
  description:{
      flexShrink: 1,
      marginLeft:Sizes.GUTTER * 1.5,
  }
});

type Props={
    article:New;
}

const NewItem: React.FC<Props> = ({ article}) => {
  return (
      <View>
        <Body style={styles.title}>{article.title}</Body>
        <Small style={styles.date}>{article.publishedDate.toDateString()}</Small>
        <Row >
            <Image source={{ uri: article.imageUrl}} style={styles.image} />
            <Body style={styles.description}>{article.shortDescription}</Body>
        </Row>
        </View>
  );
};

export default NewItem;
