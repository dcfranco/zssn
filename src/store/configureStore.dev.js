import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createDebounce from 'redux-debounced'
import thunk from 'redux-thunk'

import rootReducer from 'reducers'
import logger from 'dev/logger'

// reducers que devem ser persistidos
const persistConfig = {
  key: 'zssn',
  whitelist: [],
  storage,
}

/* eslint-disable */
const devToolsCompose =
  'undefined' !== typeof window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
    ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
    : compose
/* eslint-enable */

const enhancer = devToolsCompose(
  applyMiddleware(createDebounce(), thunk, logger)
)

export default function configureStore(initialState) {
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer, initialState, enhancer)
  const persistor = persistStore(store)
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      return store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
    })
  }
  return { store, persistor }
}
