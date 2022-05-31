/* eslint-disable class-methods-use-this */
import httpServices from './httpServices';
import transformApiArticleToNew from '../helper/transformApiArticleToNew';
import { New } from '../types/News';

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
  async fetchNews(query: string =''): Promise<New[]> {
    const response = await httpServices.get<ApiArticles>(`/top-headlines?country=us&q=${query}&apiKey=d80e013f3957457483a2e29defc57d4d`);
    const { data } = response;

    return data.articles.map(transformApiArticleToNew);
  }
}

const newsServices = new NewsService();
export default newsServices;
