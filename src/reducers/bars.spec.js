import bars from './bars'

describe('bars reducer', () => {
  it('should handle initial state', () => {
    expect(
      bars(undefined, {})
    ).toEqual({ bars: [] })
  })

  describe('when handling UPDATE_PROGRESS', () => {

    it('should do nothing if id doesn\'t exists ', () => {
      expect(
        bars({ bars: [], limit: 100 }, {
          type: 'UPDATE_PROGRESS',
          id: 'bar1',
          amount: 10
        })
      ).toEqual({ bars: [], limit: 100 })
    })

    it('should increment progress of existing bar', () => {
      expect(
        bars({ bars: [{ id: 'bar1', progress: 20, valid: true }], limit: 100 }, {
          type: 'UPDATE_PROGRESS',
          id: 'bar1',
          amount: 10
        })
      ).toEqual({
        bars: [{ id: 'bar1', progress: 30, valid: true, percent: 30 }],
        limit: 100
      })
    })

    it('should invalidate bar when exeeding limit', () => {
      expect(
        bars({ bars: [{ id: 'bar1', progress: 20, valid: true }], limit: 100 }, {
          type: 'UPDATE_PROGRESS',
          id: 'bar1',
          amount: 100
        })
      ).toEqual({
        bars: [{ id: 'bar1', progress: 120, valid: false, percent: 100 }],
        limit: 100
      })
    })
  })
})
