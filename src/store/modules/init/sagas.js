import { all, takeLatest  } from 'redux-saga/effects';

export function* initFunction({ payload }) {}


export default all([
  takeLatest('@init', initFunction),
]);
