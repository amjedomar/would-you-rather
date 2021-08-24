import {SET_INITIALIZED} from '../actions/initialized';

const initialized = (state = false, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return true;
    default:
      return state;
  }
};

export default initialized;
