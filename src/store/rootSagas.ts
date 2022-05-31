/* eslint-disable @typescript-eslint/no-explicit-any */
import { all, fork } from 'redux-saga/effects';
import { newsSaga } from './duckers/news';


export default function* rootSaga(): any {
  return yield all([
    fork(newsSaga),
  ]);
}
