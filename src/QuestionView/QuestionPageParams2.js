import React, { Component } from 'react'
import {connect} from 'react-redux'
import {updatePointer} from '../Redux/index'
import {updateStore}    from '../Redux/index'
import {updateQuestion} from '../Redux/index'
import {Qdata}          from  './DataForSingleQuestion'

class QuestionPageParams2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             state_pointer: this.props.match.params.key
        }
        console.log("Construtor of Page Params")
    }
    
    componentDidMount(){
        console.log("Component Did Mount of Page Params")
        this.props.updatePointer(this.props.match.params.key)
        this.props.updateQuestion(Qdata)
        console.log("Page Params 21")
   }
    render(props) {
     console.log("Render")
     console.log(this.props.pointer , "Pointer")
     console.log(this.props.currentQuestionData,"Current Question")
    
        return (
            <div>
                <p>Page Params</p>
            </div>
        )
    }    
}

const mapStateToProps = (state)=>{
    return {
        QuestionData : state.question.QuestionData,
        pointer      : state.pointer.pointer,
        currentQuestionData : state.question.currentQuestionData
        
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        updateStore :  (Qdata) => dispatch(updateStore(Qdata)),
        updatePointer : (pointer) => dispatch(updatePointer(pointer)),
        updateQuestion : (Question) => dispatch(updateQuestion(Question))
    }
}


 


export default connect(mapStateToProps, mapDispatchToProps)(QuestionPageParams2)

// export default QuestionPageParams2