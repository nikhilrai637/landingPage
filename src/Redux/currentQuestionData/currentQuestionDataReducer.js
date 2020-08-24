import {UPDATE_QUESTION} from './currentQuestionDataTypes'

const initialState =   
    { 
        qid : 'A',
        Qtitle : "Max Subsequent Sum",
        Qdescription : ` There are n programmers that you want to split into several non-empty teams. The skill of the i-th programmer is ai. You want to assemble the maximum number of teams from them. There is a restriction for each team: the number of programmers in the team multiplied by the minimum skill among all programmers in the team must be at least x.
 
        Each programmer should belong to at most one team. Some programmers may be left without a team.
        
        Calculate the maximum number of teams that you can assemble.`
     }
 

const currentQuestionDataReducer = (state = initialState , action) => {
    console.log(action.payload,"Reducer 16")
    switch (action.type) {
        case 'UPDATE_QUESTION_ASYNC' : return {
           
            currentQuestionData : action.payload
        }
        default : 
        console.log("Default is running")
        return  {
               ...state,
               anotherState : 0
        }
             
        
    }

}

export default currentQuestionDataReducer