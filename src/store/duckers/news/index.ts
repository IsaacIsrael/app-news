import _ from 'lodash';
import { createActions, createReducer } from 'reduxsauce';
import { Actions, Reducers, State, SetNews } from './types';

// Export Saga
export { default as newsSaga } from './sagas';

// Create Initial state
export type { State };

const INITIAL_STATE: State = {
    list:[]
};

// Create action Types and Creators
export const { Types, Creators } = createActions<Actions, Reducers>({
  fetchNews: ['query'],
  setNews: ['news'],
});

// Create Reducer
const setNews = (state = INITIAL_STATE, { news }: SetNews): State => {
  return {
    ...state,
    list:news,
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.SET_NEWS]: setNews,
});
