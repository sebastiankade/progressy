import reducer from './index'

describe('master reducer', () => {
  it('should handle initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({ bars: [], buttons: [], limit: undefined, loading: false });
  })

  it('should pass UPDATE_PROGRESS through to bars', () => {
    const state = reducer({ bars: [{ id: 'bar1', progress: 20, valid: true }], limit: 100 }, {
      type: 'UPDATE_PROGRESS',
      id: 'bar1',
      amount: 10
    });
    expect(state.bars).toEqual([{ id: 'bar1', progress: 30, valid: true, percent: 30 }])
  })
})
