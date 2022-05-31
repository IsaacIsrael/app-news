/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import _ from 'lodash';
import Logger from '../../../helper/Logger';
import { Creators as requestsReducer } from '../requests';
import { Creators as reducer, Types as Actions } from '.';
import { RootState } from '../../rootReducer';
import { FetchNews } from './types';
import newsServices from '../../../services/newsServices';
import { New } from '../../../types/News';

function* fetchNews(action: FetchNews) {
  try {
    Logger.info('Fetch News: Start fetching');
    yield put(requestsReducer.requestStarted(action));
    const {query} = action;

    const news: New[] = yield call([newsServices, newsServices.fetchNews], query);

    yield put(reducer.setNews(news));
    yield put(requestsReducer.requestSucceeded(action));
    Logger.success('Fetch News: Fetch with success');
  } catch (e) {
    const error = e as Error;

    Logger.error('Fetch News: Error to fetch', error.message);

    yield put(requestsReducer.requestFailed(action));
  } finally {
    yield put(requestsReducer.requestFinished(action));
  }
}

export default function* countSaga() {
  yield all([takeLatest(Actions.FETCH_NEWS, fetchNews)]);
}
