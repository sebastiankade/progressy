import config from './config'

describe('config reducer', () => {
  it('should handle initial state', () => {
    expect(
      config(undefined, {})
    ).toEqual({ loading: false })
  })

  describe('when handling GET_CONFIG', () => {
    it('should set the loading flag', () => {
      expect(
        config({}, {
          type: 'GET_CONFIG'
        })
      ).toEqual({ loading: true })
    })
  })

  describe('when handling GET_CONFIG_SUCCESS', () => {
    it('should apply the data', () => {
      expect(
        config({}, {
          type: 'GET_CONFIG_SUCCESS',
          payload: {
            "buttons": [10, 38, -13, -18],
            "bars": [62, 45, 62],
            "limit": 230
          }
        })
      ).toEqual({
        loading: false,
        error: false,
        buttons: [10, 38, -13, -18],
        bars: [
          { id: 'bar1', progress: 62, percent: 27, valid: true },
          { id: 'bar2', progress: 45, percent: 20, valid: true },
          { id: 'bar3', progress: 62, percent: 27, valid: true }
        ],
        limit: 230
      })
    })
  })

  describe('when handling GET_CONFIG_ERROR', () => {
    it('should apply the error', () => {
      expect(
        config({}, {
          type: 'GET_CONFIG_ERROR',
          error: 'Failed to reach the server.'
        })
      ).toEqual({
        loading: false,
        error: 'Failed to reach the server.'
      })
    })
  })

})
