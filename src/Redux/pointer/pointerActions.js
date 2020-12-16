import {UPDATE} from './pointerTypes'

export const  updatePointer =  (newPointer) => {
    console.log("Pointer   Action")
    return {
        type : UPDATE,
        payload : newPointer
    }
}