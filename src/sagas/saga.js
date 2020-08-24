import {delay, takeEvery} from 'redux-saga/effects'
import {takeLatest,put} from 'redux-saga/effects'
import {Qdata} from '../QuestionView/Qdata'

function *updateQuestionAsync(action) {
    
   
    yield delay(400);
    yield put ({type : 'UPDATE_QUESTION_ASYNC',payload : action.payload  });
}

export function*  watchUpdateQuestion(){
    console.log("SAGA IS RUNNING")
 yield takeEvery('UPDATE_QUESTION' ,updateQuestionAsync);
} 

