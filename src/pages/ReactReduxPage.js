import React,{Component} from 'react'
import store from '../store/'
import {connect} from 'react-redux'
@connect(
  (state)=>({num:state})
)
class ReactRedux extends Component{
  constructor(){
    super()
  }
  add=()=>{    
    this.props.dispatch({type:'ADD',payload:10})
  }
  render(){
    const {num, dispatch} = this.props
    console.log(this.props,'this.props')
    return(
      <div>
        <h3>ReactRedux-page</h3>
        <div>
          <p>{num}</p>
          <button
            onClick={this.add}
          >
            add
          </button>
        </div>
      </div>
    )
  }
}
export default ReactRedux