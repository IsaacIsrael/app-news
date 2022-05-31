import AsyncStorageLib from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import requestsReducers, { State as RequestsState } from './duckers/requests';

// eslint-disable-next-line @typescript-eslint/ban-types
export type RootState = {
  requests: RequestsState;
};

const rootReducer = combineReducers({
  requests: requestsReducers,
});

const persistConfig = {
  key: 'LIFTED_REDUX_STORE',
  storage: AsyncStorageLib,
  whitelist: ['crypto'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
