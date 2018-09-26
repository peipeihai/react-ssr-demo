import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/redux/reducers';

export default (initialState) => {
    const store = createStore(reducers, { list: initialState }, applyMiddleware(thunk));

    return store;
};