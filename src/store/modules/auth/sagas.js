/* eslint-disable no-alert */
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signInFailure, signOut, dataSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { username, password } = payload;
    const response = yield call(api.post, 'auth', {
      username,
      password,
    });

    const { access_token } = response.data;

    const user = yield call(api.get, 'auth/me', {
      headers: {
        Authorization: `JWT ${access_token}`,
      },
    });

    yield put(signInSuccess(access_token));
    yield put(dataSuccess(user.data));
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(signInFailure());
  }
}

export function* userData({ payload }) {
  const { token } = payload;
  const response = yield call(api.get, 'auth/me', {
    headers: {
      Authorization: `JWT ${token}`,
    },
  });

  yield put(dataSuccess(response.data));
}

export function* signOutFunc() {
  const answer = window.confirm('Deseja sair?');
  if (answer) {
    sessionStorage.clear();
    localStorage.clear();
    yield put(signOut());
    history.push('/');
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOutFunc),
  takeLatest('@user/DATA_REQUEST', userData),
]);
