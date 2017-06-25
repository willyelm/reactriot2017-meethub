import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

import users from './ducks/users';
import geoLocation from './ducks/geoLocation';
import languages from './ducks/languages';
import app from './ducks/app';

export const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(
    combineReducers({
        app,
        users,
        languages,
        geoLocation,
        routing: routerReducer
    }),
    applyMiddleware(thunk, middleware)
);

export default store;
