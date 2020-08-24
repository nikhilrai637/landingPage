import React ,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'

function QuestionPage() {
    const pointer = useSelector(state => state.pointer.pointer)
    const QuestionData = useSelector(state => state.question.QuestionData)
    const [index,setindex] = useState(0)
    return (
        <div>
              
                 {QuestionData.map( (q,key) => {
                     return ( <div>
                           {q.qid ===  pointer ? <div>   <h1> {q.Qtitle} </h1>  <h3> {q.Qdescription} </h3> 
                            </div>: null }
                           </div>)
                 })}
            
            {pointer}
        </div>
    )
}

export default QuestionPage
