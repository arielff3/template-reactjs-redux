import { all } from 'redux-saga/effects';

import init from './init/sagas';

export default function* rootSaga() {
  return yield all([init]);
}
