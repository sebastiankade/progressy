import bars from './bars';
import config from './config';

const appReducer = (state = { bars: [], buttons: [], limit: undefined, loading: false }, action) => {
  switch (action.type) {
    case 'GET_CONFIG':
    case 'GET_CONFIG_SUCCESS':
    case 'GET_CONFIG_ERROR':
      return config(state, action);
    case 'UPDATE_PROGRESS':
      return { ...state, bars: bars(state.bars, action) };
    default:
      return state;
  }
};

export default appReducer;
