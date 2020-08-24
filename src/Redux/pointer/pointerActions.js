import {UPDATE} from './pointerTypes'

export const  updatePointer =  (newPointer) => {
    return {
        type : UPDATE,
        payload : newPointer
    }
}