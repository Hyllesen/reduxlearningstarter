import { SET_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER, CLEAR_COUNTER } from './types';

export const counterIncrement = () => {
    return {
        type: INCREMENT_COUNTER
    };
}

export const counterDecrement = () => {
    return {
        type: DECREMENT_COUNTER
    };
}

export const counterClear = () => {
    return {
        type: CLEAR_COUNTER
    };
}

export const counterSet = (receivednumber) => {
    return {
        type: SET_COUNTER,
        payload: receivednumber
    };
}