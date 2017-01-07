import bars from './bars'

describe('bars reducer', () => {
  it('should handle initial state', () => {
    expect(
      bars(undefined, {})
    ).toEqual([])
  })

  describe('when handling UPDATE_PROGRESS', () => {

    it('should do nothing if id doesn\'t exists ', () => {
      expect(
        bars([], {
          type: 'UPDATE_PROGRESS',
          id: 'bar1',
          amount: 10,
          limit: 100
        })
      ).toEqual([])
    })

    it('should increment progress of existing bar', () => {
      expect(
        bars([{ id: 'bar1', progress: 20, valid: true }], {
          type: 'UPDATE_PROGRESS',
          id: 'bar1',
          amount: 10,
          limit: 100
        })
      ).toEqual([{ id: 'bar1', progress: 30, valid: true }])
    })

    it('should invalidate bar when exeeding limit', () => {
      expect(
        bars([{ id: 'bar1', progress: 20, valid: true }], {
          type: 'UPDATE_PROGRESS',
          id: 'bar1',
          amount: 100,
          limit: 100
        })
      ).toEqual([{ id: 'bar1', progress: 120, valid: false }])
    })

  })
})
