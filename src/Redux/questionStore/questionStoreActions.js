import {UPDATE_STORE} from './questionStoreTypes'

export const  updateStore = (QuestionData = []) => {
    return {
        type: 'UPDATE_STORE',
        payload : QuestionData
    }
}