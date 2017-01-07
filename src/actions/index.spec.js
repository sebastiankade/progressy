import * as actions from './index';

describe('actions', () => {
  it('should create UPDATE_PROGRESS action', () => {
    expect(actions.updateProgress('bar1', 10, 100))
      .toEqual({ type: 'UPDATE_PROGRESS', amount: 10, limit: 100 });
  })
})
