import reducer from './index'

describe('reducer reducer', () => {
  it('should handle initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({ bars: [], buttons: [], limit: undefined, loading: false });
  })
})
