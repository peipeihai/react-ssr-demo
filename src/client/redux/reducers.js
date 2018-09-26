import {
    FETCH_DATA
} from './actions';

export default (state = { list: [] }, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return { ...state, list: action.payload.data };
        default:
            return state;
    }
};