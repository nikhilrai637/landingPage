import React ,{useEffect,useState} from 'react'
import {Route,Switch,withRouter} from 'react-router-dom'
import QuestionView from './QuestionView'
 

import {connect} from 'react-redux'
import {updateStore} from "../Redux/index.js"
import {Qdata} from './Qdata'
import {updatePointer} from '../Redux/index'
import {updateQuestion} from '../Redux/index'
 
import QuestionPageParams2 from './QuestionPageParams2'
import QuestionPageParam from './QuestionPageParam' 
 
 
function QuestionRoute(props) {
    useEffect (() => {console.log('QuestionRoute line 16')
    props.updateStore(Qdata);
    props.updatePointer(Qdata[0].qid)         
 },[])
    return (
        <div>
            <Switch> 
            <Route path = "/Question_List/:key" component = { QuestionPageParam}/>
            <Route path = '/Question_List' component = {QuestionView} />
            </Switch>
        </div>
    )
       
   
    
}

const mapStateToProps = (state)=>{
    return {
        QuestionData : state.question.QuestionData,
        pointer      : state.pointer.pointer,
        
        
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        updateStore : (Qdata) => dispatch(updateStore(Qdata)),
        updatePointer : (pointer) => dispatch(updatePointer(pointer)),
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(QuestionRoute)
