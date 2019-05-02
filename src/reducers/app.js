import { fromJS } from 'immutable'

import { APP_LOAD_SPINNER, APP_UNLOAD_SPINNER } from 'actions/app'

const initialState = fromJS({
  spinner: false,
})

const actionsMap = {
  [APP_LOAD_SPINNER]: state => {
    return state.merge({
      spinner: true,
    })
  },
  [APP_UNLOAD_SPINNER]: state => {
    return state.merge({
      spinner: false,
    })
  },
}

export default function app(state = initialState, action = {}) {
  const fn = actionsMap[action.type]
  return fn ? fn(state, action) : state
}
