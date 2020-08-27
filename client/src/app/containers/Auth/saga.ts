import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import api from 'utils/api';

function* login({ payload }) {
  try {
    const res = yield call(api.post, 'auth/login', payload);
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    yield put(actions.loggedIn(res.data));
  } catch {
    yield put(actions.error());
  }
}

function* register({ payload }) {
  try {
    const res = yield call(api.post, 'auth/signup', payload);
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    yield put(actions.registered(res.data));
  } catch {
    yield put(actions.error());
  }
}

export function* authSaga() {
  yield takeLatest(actions.login, login);
  yield takeLatest(actions.register, register);
}
