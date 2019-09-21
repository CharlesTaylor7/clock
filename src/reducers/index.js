import * as R from 'ramda'

export default (state, action) => {
  switch(action.type) {
    case 'SET_TIME':
      return R.set(R.lensProp('time'), action.time, state);
    case 'SET_ERROR':
      return R.set(R.lensProp('error'), action.error, state);
    case 'SET_SOUND':
      return R.set(R.lensProp('soundOn'), action.on, state);
    default:
      return state;
  }
}
