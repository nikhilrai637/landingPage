import {createStore,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga' 
import rootReducer from './rootReducer';
import {watchUpdateQuestion} from '../sagas/saga'
const sagaMiddleware = createSagaMiddleware(); 
 
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watchUpdateQuestion)

export default store
