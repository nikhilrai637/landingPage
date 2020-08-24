import {UPDATE_STORE} from './questionStoreTypes'

const initialState = {
    QuestionData: [],
    
}

const questionStoreReducer = (state = initialState,action) => {
   console.log("Question Store is running")
    switch (action.type) {
        case "UPDATE_STORE" :  return  {
             
            QuestionData :  action.payload,
             
            
        }
        default : return state

    }
}

export default questionStoreReducer