/**
 * Created by loki on 8/4/17.
 */
// ./src/store/configureStore.js
import {createStore, compose, applyMiddleware} from 'redux';
// Import thunk middleware
import thunk from 'redux-thunk';
import todoApp from '../reducers/index';

export default function configureStore() {
    return createStore(
        todoApp,  applyMiddleware(thunk)
    );
}