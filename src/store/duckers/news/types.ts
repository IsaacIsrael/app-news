/* eslint-disable @typescript-eslint/ban-types */
import { AnyAction } from 'redux';
import { New } from '../../../types/News';

export type State = {
    list: New[]
};

export interface Actions {
  FETCH_NEWS: 'FETCH_NEWS';
  SET_NEWS: 'SET_NEWS';
}

export interface FetchNews extends AnyAction {
  type: Actions['FETCH_NEWS'];
  query ?: string
}

export interface SetNews extends AnyAction {
  type: Actions['SET_NEWS'];
  news: New[];
}

export interface Reducers {
  fetchNews(query?: string): FetchNews;
  setNews(news: New[]): SetNews;
}
