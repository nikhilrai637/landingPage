import {delay, takeEvery,call} from 'redux-saga/effects'
import {takeLatest,put} from 'redux-saga/effects'
import {Qdata} from '../QuestionView/Qdata'
import {fetchdata} from '../api/fetchdata'

function *updateQuestionAsync(action) {
    
    const data = yield  fetchdata(action.payload) 
    console.log(data,"Required Data from fetch" )
    console.log(action.payload, "Printing Action Payload")
     
    yield put ({type : 'UPDATE_QUESTION_ASYNC',payload :  data});
}

export function*  watchUpdateQuestion(){
    console.log("SAGA IS RUNNING")
 yield takeLatest('UPDATE_QUESTION' ,updateQuestionAsync);
} 

