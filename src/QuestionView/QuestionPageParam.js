import React ,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {updatePointer} from '../Redux/index'
import {updateQuestion} from '../Redux/index'
import {Qdata} from './Qdata'
function QuestionPageParam(props) {
    const dispatch = useDispatch()
    const pointer = useSelector(state => state.pointer.pointer)
    const QuestionData = useSelector(state => state.question.QuestionData)
    const currentQuestionData = useSelector(state => state.currentQuestionData.currentQuestionData)
    
    
    
    useEffect (() => {
        console.log("USE EFFECT IS RUNNING")
        let k = props.match.params.key
        for(let i = 0 ; i < Qdata.length; i++) {
             if(Qdata[i].qid === props.match.params.key) k = i;  
        }
      dispatch(updateQuestion(k))
       
},[props.match.params.key])
const handleBack = ()  => {
    props.history.push(`/Question_list`)
}  
const handleNext = ()  => {
    // console.log("handle next")
    let n = QuestionData.length
    let p = pointer
    let k = 0
    for(let i = 0 ; i<QuestionData.length ; i++) {
          if(QuestionData[i].qid === pointer){
               
              p = QuestionData[(i+1) % n].qid
              k = (i+1)%n
              props.history.push(`/Question_list/${p}`)
            }
    } 
    let obj = Qdata[k]
      
    dispatch(updatePointer(p))
    dispatch(updateQuestion(p))
          
}

   
    return (
        <div>                     
        {currentQuestionData?<div>
        <h1>{currentQuestionData.title}</h1>
        <h2>{currentQuestionData.description}</h2>
        </div>:null}
              
 
             <button onClick = {handleBack}>Back to track</button>     
            <button onClick = {handleNext}>Next</button>
           
            {pointer}
        </div>
    )
}

export default QuestionPageParam
