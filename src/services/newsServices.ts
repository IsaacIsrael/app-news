/* eslint-disable class-methods-use-this */
import httpServices from './httpServices';
import transformApiArticleToNew from '../helper/transformApiArticleToNew';
import { New } from '../types/News';
import queryParamsArray from '../helper/queryParamsArray';
import _ from 'lodash';

export interface ApiArticle{
    title: string,
    description:string,
    urlToImage: string,
    publishedAt: Date,
    author: string,
    content: string,
}


interface ApiArticles {
    articles: ApiArticle[],
}



class NewsService {
  async fetchNews(query: string ='', categories: string[]= []): Promise<New[]> {
    const category = queryParamsArray(categories, 'category');
    const filterCategories =  _.isEmpty(category) ? category :  `&${category}`
    const response = await httpServices.get<ApiArticles>(`/top-headlines?country=us&q=${query}${filterCategories}&apiKey=d80e013f3957457483a2e29defc57d4d`);
    const { data } = response;

    return data.articles.map(transformApiArticleToNew);
  }
}

const newsServices = new NewsService();
export default newsServices;
