/**
 * Created by loki on 1.08.17.
 */
 import React from 'react'
 import { render } from 'react-dom'
 import { Provider } from 'react-redux'
 import { createStore } from 'redux'
 import todoApp from './reducers'
 import App from './components/App'

 let store = createStore(todoApp)

render(
   <Provider store={store}>
     <App />
   </Provider>,
    document.getElementById('mount-point')
);
