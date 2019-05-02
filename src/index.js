import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from 'store/configureStore'
import Root from 'containers/Root'

import 'moment/locale/pt-br'
import 'assets/styles/app.scss'

const { store, persistor } = configureStore()

ReactDOM.render(
  <Provider store={ store }>
    <PersistGate loading={ null } persistor={ persistor }>
      <Root store={ store } />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
