import * as actions from './index';

describe('actions', () => {
  it('should create UPDATE_PROGRESS action', () => {
    expect(actions.updateProgress('bar1', 10))
      .toEqual({ type: 'UPDATE_PROGRESS', id: 'bar1', amount: 10});
  })
})
