const incrementBar = (bar, amount, max) => {
  if (!bar) {
    return undefined;
  }

  let progress = Math.max(bar.progress + amount, 0);
  return { id: bar.id, progress: progress, valid: progress < max };
}

const bar = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PROGRESS':
      return incrementBar(state, action.amount, action.limit);
    default:
      return state;
  }
};

const bars = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_PROGRESS':
      return state.map(b => {
        if (b.id === action.id) {
          return bar(b, action);
        }
        return b;
      });
    default:
      return state;
  }
};

export default bars;
