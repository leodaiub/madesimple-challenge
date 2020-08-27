import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import api from 'utils/api';
import { hide, show as showModal } from 'redux-modal';

function* index() {
  try {
    const res = yield call(api.get, '/albums');
    yield put(actions.getAlbumSuccess(res.data));
  } catch (e) {
    yield put(
      showModal('infoDialog', {
        title: 'Ocorreu um erro',
        message: 'Tente novamente',
      }),
    );
    yield put(actions.error(e));
  }
}

function* show({ payload }) {
  try {
    const res = yield call(api.get, `/albums/${payload}`);
    yield put(actions.showAlbumSuccess(res.data));
  } catch (e) {
    yield put(
      showModal('infoDialog', {
        title: 'Ocorreu um erro',
        message: 'Tente novamente',
      }),
    );
    yield put(actions.error(e));
  }
}

function* create({ payload }) {
  try {
    const res = yield call(api.post, '/albums', payload.data);

    yield put(actions.createAlbumSuccess(res.data));
    yield put(hide('deleteDialog'));
    yield put(hide('AlbumModal'));
    yield put(
      showModal('infoDialog', {
        title: 'Album criado',
        message: 'Album adicionado com sucesso!',
      }),
    );
  } catch (error) {
    yield put(actions.error(error.data.error.errors));
  }
}

function* update({ payload }) {
  try {
    const res = yield call(api.put, `/albums/${payload.id}`, payload.data);
    yield put(actions.updateAlbumSuccess(res.data));
    yield put(hide('deleteDialog'));
    yield put(hide('AlbumModal'));
    yield put(
      showModal('infoDialog', {
        title: 'Album atualizado',
        message: 'Album atualizado com sucesso!',
      }),
    );
  } catch (error) {
    yield put(actions.error(error.data.error.errors));
  }
}

function* deleteAlbum({ payload }) {
  try {
    yield call(api.delete, `/albums/${payload}`);
    yield put(actions.deleteAlbumSuccess(payload));
    yield put(hide('deleteDialog'));
    yield put(hide('AlbumModal'));
    yield put(
      showModal('infoDialog', {
        title: 'Album excluído',
        message: 'Album excluído com sucesso!',
      }),
    );
  } catch (e) {
    yield put(
      showModal('infoDialog', {
        title: 'Ocorreu um erro',
        message: 'Tente novamente',
      }),
    );
    yield put(actions.error(e));
  }
}

export function* albumsSaga() {
  yield takeLatest(actions.getAlbums, index);
  yield takeLatest(actions.showAlbum, show);
  yield takeLatest(actions.createAlbum, create);
  yield takeLatest(actions.updateAlbum, update);
  yield takeLatest(actions.deleteAlbum, deleteAlbum);
}
