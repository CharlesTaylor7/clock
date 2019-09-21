import { apply, takeLatest, delay } from 'redux-saga/effects'

import tickSound from '../assets/clock-tick.mp3'

export default function*() {
  yield takeLatest('SET_SOUND', worker);
};

const audio = new Audio(tickSound);

function* worker(action) {
  if (action.on) {
    yield delay(300);
    while (true) {
      yield apply(audio, play);
      yield delay(1000);
    }
  }
}

function play() {
  this.play();
}
