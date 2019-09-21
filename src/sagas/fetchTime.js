import { call, put, takeEvery, delay } from 'redux-saga/effects'
import fetchTime from '../api/time'

export default function*() {
  yield takeEvery('REQUEST_TIME', worker);
};

function* worker() {
  try {
     const time = yield call(fetchTime);
     yield put({ type: 'SET_TIME', time });
     yield delay(1000);
     yield put({ type: 'REQUEST_TIME' });
  } catch (error) {
     yield put({ type: 'SET_ERROR', error });
  }
}
