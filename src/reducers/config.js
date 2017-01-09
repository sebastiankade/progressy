import { incrementBar } from './bars';

const config = (state = { loading: false }, action) => {
  switch (action.type) {
    case 'GET_CONFIG':
      return {
        ...state,
        loading: true
      };
    case 'GET_CONFIG_SUCCESS':
      return {
        ...state,
        buttons: [...action.payload.buttons],
        bars: action.payload.bars.map((b, i) => {
          return incrementBar({ id: 'Bar' + (i + 1), progress: 0, valid: true }, b, action.payload.limit);
        }),
        limit: action.payload.limit,
        loading: false,
        error: false
      };
    case 'GET_CONFIG_ERROR':
      return {
        ...state,
        loading: false,
        error: (action.error ? action.error.message || action.error : null) || 'Failed to load options'
      };
    default:
      return state;
  }
};

export default config;
