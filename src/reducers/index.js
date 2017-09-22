import { combineReducers } from 'redux';
import CounterReducer from './counterReducer';
import HelloReducer from './helloReducer';

export default combineReducers({
    counter: CounterReducer,
    hello: HelloReducer
});