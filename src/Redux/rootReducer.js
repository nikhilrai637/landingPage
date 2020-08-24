import {combineReducers} from 'redux'
import questionStoreReducer from './questionStore/questionStoreReducer'
import pointerReducer from './pointer/pointerReducer'
import currentQuestionDataReducer from './currentQuestionData/currentQuestionDataReducer'

const rootReducer = combineReducers({
    question : questionStoreReducer,
    pointer : pointerReducer,
    currentQuestionData : currentQuestionDataReducer
})

export default rootReducer