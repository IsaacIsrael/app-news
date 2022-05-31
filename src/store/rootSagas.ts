/* eslint-disable @typescript-eslint/no-explicit-any */
import { all, fork } from 'redux-saga/effects';


export default function* rootSaga(): any {
  return yield all([
    // fork(userSaga),
  ]);
}
