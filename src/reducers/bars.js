export const incrementBar = (bar, amount, max) => {
  if (!bar) {
    return undefined;
  }

  let progress = Math.max(bar.progress + amount, 0);
  return { id: bar.id, progress: progress, valid: progress < max, percent: Math.ceil(Math.min(progress, max) / max * 100) };
}

const bar = (state, action, limit) => {
  switch (action.type) {
    case 'UPDATE_PROGRESS':
      return incrementBar(state, action.amount, limit);
    default:
      return state;
  }
};

const bars = (state = { bars:[] }, action) => {
  switch (action.type) {
    case 'UPDATE_PROGRESS':
      return {
        ...state,
        bars: state.bars.map(b => {
          if (b.id === action.id) {
            return bar(b, action, state.limit);
          }
          return b;
        })
      };
    default:
      return state;
  }
};

export default bars;
