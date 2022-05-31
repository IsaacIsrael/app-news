import _ from 'lodash';
import { ApiArticle } from '../services/newsServices';
import { New } from '../types/News';

const transformApiArticleToNew = (article: ApiArticle): New => {
  return ({
    title: article.title,
    shortDescription: _.truncate(article.description, {length: 80}),
    imageUrl: article.urlToImage,
    publishedDate: new Date(article.publishedAt),
  })
};

export default transformApiArticleToNew;
