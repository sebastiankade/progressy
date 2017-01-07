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
          return { id: 'bar' + (i + 1), progress: b, valid: true }
        }),
        limit: action.payload.limit,
        loading: false,
        error: false
      };
    case 'GET_CONFIG_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error || 'Failed to load options'
      };
    default:
      return state;
  }
};

export default config;
