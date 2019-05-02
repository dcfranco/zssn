/* global it, describe, expect */
import reducer from 'reducers/auth'
import * as types from 'actions/auth'
import { authData } from 'tests/mock-data/auth'
import Auth from 'models/Auth'

const REHYDRATE = 'persist/REHYDRATE'

const initialStateUnauthenticated = new Auth()

const initialStateAuthenticated = new Auth({
  authenticated: true,
  accessToken: authData.accessToken,
  refreshToken: authData.refreshToken,
  refreshTokenPromise: authData.refreshTokenPromise,
})

describe('auth reducers', () => {
  it.skip('should handle dispatch of AUTH_ASYNC_SUCCESS', () => {
    expect(
      reducer(initialStateUnauthenticated, {
        type: types.AUTH_ASYNC_SUCCESS,
        data: authData,
      })
    ).toEqual(initialStateAuthenticated)
  })

  it('should handle REHYDRATE', () => {
    expect(
      reducer(initialStateUnauthenticated, {
        type: REHYDRATE,
        payload: {
          auth: initialStateAuthenticated.toJS(),
        },
      })
    ).toEqual(initialStateAuthenticated)
  })

  it('should handle unmatched TYPE', () => {
    expect(
      reducer(initialStateAuthenticated, {
        type: 'UNMATCHED_TYPE',
      })
    ).toEqual(initialStateAuthenticated)
  })
})
