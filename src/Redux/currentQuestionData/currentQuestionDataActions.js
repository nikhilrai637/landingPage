import {UPDATE_QUESTION} from './currentQuestionDataTypes'

export const updateQuestion = (currentQuestionData) =>{
     console.log(currentQuestionData,"ACTION 4 ")
    return {
        type : UPDATE_QUESTION,
        payload : currentQuestionData
    }
}
 