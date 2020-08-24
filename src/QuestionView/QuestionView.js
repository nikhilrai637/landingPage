import React ,{useEffect,useState} from 'react'
import {connect} from 'react-redux'
import {updateStore} from "../Redux/index.js"
import {Qdata} from './Qdata'
import {updatePointer} from '../Redux/index'
import QuestionCell   from './QuestionCell'
import QuestionPage from './QuestionPage.js'
import {useSelector,useDispatch} from 'react-redux'
 
function QuestionView(props) {
    const pointer = useSelector(state => state.pointer.pointer)
    const QuestionData = useSelector(state => state.question.QuestionData)
   useEffect (() => {console.log('Hey It"s working')
   console.log(props)
//    props.updateStore(Qdata);
   console.log(Qdata[0].qid)
//    props.updatePointer(Qdata[0].qid)         
},[])
 
//  const  {QuestionData} =   props
  
 const [toggle ,settoggle] = useState(1)
 const [next,setnext] = useState(props.pointer)
 const handleNext = ()  => {
     let n = QuestionData.length
     for(let i = 0 ; i<QuestionData.length ; i++) {
         if(QuestionData[i].qid === props.pointer){
             props.updatePointer(QuestionData[(i+1)%n].qid)
         } 
     }
          
 }
    return (
        <div>
             {QuestionData.map( (q,key) => {
                  return (<QuestionCell qid = {q.qid}  Qtitle = {q.Qtitle} history = {props.history} />) 
             } )}        
        </div>
    )
}

 

 
export default  QuestionView

