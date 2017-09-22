import { SET_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER, CLEAR_COUNTER } from '../actions/types';

export default (state = 0, action) => {
    switch(action.type) {
        case INCREMENT_COUNTER:
            return state + 1;
        case DECREMENT_COUNTER:
            return state - 1;
        case CLEAR_COUNTER:
            return 0;
        case SET_COUNTER:
            return action.payload;
        default:
            return state;
    }
}