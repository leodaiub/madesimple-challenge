import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import api from 'utils/api';
import { hide, show as showModal } from 'redux-modal';

function* index() {
  try {
    const res = yield call(api.get, '/artists');
    yield put(actions.getArtistsSuccess(res.data));
  } catch {
    yield put(
      showModal('infoDialog', {
        title: 'Ocorreu um erro',
        message: 'Tente novamente',
      }),
    );
    yield put(actions.error());
  }
}

function* show({ payload }) {
  try {
    const res = yield call(api.get, `/artists/${payload}`);
    yield put(actions.showArtistSuccess(res.data));
  } catch {
    yield put(
      showModal('infoDialog', {
        title: 'Ocorreu um erro',
        message: 'Tente novamente',
      }),
    );
    yield put(actions.error());
  }
}

function* create({ payload }) {
  try {
    const res = yield call(api.post, '/artists', payload.data);
    yield put(actions.createArtistSuccess(res.data));
    yield put(hide('deleteDialog'));
    yield put(hide('artistModal'));
    yield put(
      showModal('infoDialog', {
        title: 'Artist criado',
        message: 'Artist adicionado com sucesso!',
      }),
    );
  } catch {
    yield put(
      showModal('infoDialog', {
        title: 'Ocorreu um erro',
        message: 'Tente novamente',
      }),
    );
    yield put(actions.error());
  }
}

function* update({ payload }) {
  try {
    const res = yield call(api.put, `/artists/${payload.id}`, payload.data);
    yield put(actions.updateArtistSuccess(res.data));
    yield put(hide('deleteDialog'));
    yield put(hide('artistModal'));
    yield put(
      showModal('infoDialog', {
        title: 'Artist atualizado',
        message: 'Artist atualizado com sucesso!',
      }),
    );
  } catch {
    yield put(
      showModal('infoDialog', {
        title: 'Ocorreu um erro',
        message: 'Tente novamente',
      }),
    );
    yield put(actions.error());
  }
}

function* deleteArtist({ payload }) {
  try {
    yield call(api.delete, `/artists/${payload}`);
    yield put(actions.deleteArtistSuccess(payload));
    yield put(hide('deleteDialog'));
    yield put(hide('artistModal'));
    yield put(
      showModal('infoDialog', {
        title: 'Artist excluído',
        message: 'Artist excluído com sucesso!',
      }),
    );
  } catch {
    yield put(
      showModal('infoDialog', {
        title: 'Ocorreu um erro',
        message: 'Tente novamente',
      }),
    );
    yield put(actions.error());
  }
}

export function* artistsSaga() {
  yield takeLatest(actions.getArtists, index);
  yield takeLatest(actions.showArtist, show);
  yield takeLatest(actions.createArtist, create);
  yield takeLatest(actions.updateArtist, update);
  yield takeLatest(actions.deleteArtist, deleteArtist);
}
