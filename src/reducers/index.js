import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form/immutable'

import app from 'reducers/app'
import people from 'reducers/people'
import errors from 'reducers/errors'

export default combineReducers({
  app,
  people,
  errors,
  form: formReducer,
})
