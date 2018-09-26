import {
    FETCH_DATA
} from './actions';

export default (state = { list: [] }, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return { ...state, list: state.list.concat(action.payload.data) };
        default:
            return state;
    }
};