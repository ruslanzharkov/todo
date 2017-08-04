/**
 * Created by loki on 8/4/17.
 */
// ./src/store/configureStore.js
import {createStore, compose, applyMiddleware} from 'redux';
// Import thunk middleware
import thunk from 'redux-thunk';
import todoApp from '../reducers/index';

export default function configureStore(initialState) {
    const middewares = [
        // Add other middleware on this line...

        // thunk middleware can also accept an extra argument to be passed to each thunk action
        // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
        thunk,
    ];

    return createStore(todoApp, initialState, compose(
        applyMiddleware(...middewares)
        )
    );
}