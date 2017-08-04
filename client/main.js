/**
 * Created by loki on 1.08.17.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import * as actions from './actions/index'
import configureStore from './store/configureStore'


const store = configureStore();
store.dispatch(actions.fetchTodos());

ReactDOM.render (
    <Provider store={store}>
        <App test={store}/>
    </Provider>
    ,
    document.getElementById('mount-point')
)



