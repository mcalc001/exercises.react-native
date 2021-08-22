import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './root-reducer';

const middleWare = compose(applyMiddleware(thunk));
export const store = createStore(rootReducer(), middleWare);
export default store;
