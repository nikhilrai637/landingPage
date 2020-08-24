import {UPDATE} from './pointerTypes'
const initialState = {
    pointer : 0
}

const pointerReducer = (state = initialState , action) => {
    console.log("Pointer   Reducer")
    switch (action.type) {
        case UPDATE:return {
             pointer : action.payload
        }
        default : return state
    }
}

export default pointerReducer