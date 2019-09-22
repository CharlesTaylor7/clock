import { spawn } from 'redux-saga/effects'

import fetchTimeSaga from './fetchTime'
import clockTickSaga from './clockTick'

export default function*() {
  yield spawn(fetchTimeSaga)
  yield spawn(clockTickSaga)
}
