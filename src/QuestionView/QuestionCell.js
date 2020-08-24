import React from 'react'
function QuestionCell(props) { 
  const  handleClick = () => {
    console.log(props.history)
        props.history.push(`Question_list/${props.qid}`)
    }
    return (
        <div>
               <p onClick = {handleClick } >{props.qid}  {props.Qtitle} </p> 
        </div>
    )
}


export default QuestionCell
