import Errors from 'models/Errors'

import { ERRORS_SET_ERROR, ERRORS_CLEAR } from 'actions/errors'

const initialState = new Errors()

const actionsMap = {
  [ERRORS_SET_ERROR]: (state, action) => {
    const { code, error, critical } = action
    return state.merge({
      code,
      critical,
      error,
    })
  },
  [ERRORS_CLEAR]: () => {
    return initialState
  },
}

export default function errors(state = initialState, action = {}) {
  const fn = actionsMap[action.type]
  return fn ? fn(state, action) : state
}
