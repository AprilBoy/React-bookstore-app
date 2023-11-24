import { applyMiddleware , configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import  thunk  from 'redux-thunk';

const logMiddleware = ({getState}) => (next) => (action) => {
    console.log(action.type, getState());
    return next(action)
}

const stringMiddleware = () => (next) => (action) =>  {
    if (typeof action === 'string') {
        const newAction = { type: action };
        return next(newAction);
    }
    return next(action)
}

const store = configureStore({reducer}, applyMiddleware(thunk, stringMiddleware,logMiddleware));


const delayedActionCreator = (timeout) => (dispatch) => {
    setTimeout(() => {
        dispatch({
            type: 'DELAYED_ACTION'
        })
    }, timeout)
store.dispatch(delayedActionCreator(3000))
}

// store.dispatch('HELLO_WORLD')
export default store;
