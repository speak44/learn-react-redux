import React,{Component} from 'react'
import store from '../store/'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
@connect(
  //store
  (state)=>({num:state}),
  // dispatch 类型：obj|fn
  // {
  //   add:()=>({
  //     type:'ADD',
  //     payload:20
  //   })
  // }
  dispatch=>{
    // const add =()=>dispatch({ type:'ADD', payload:20})
    // const minus=()=>dispatch({type:'MINUS', payload:10})
    let creators={
      add:()=>({type:'ADD', payload:20}),
      minus:()=>({type:'MINUS', payload:10})
    }
    creators=bindActionCreators(creators, dispatch)
    return {dispatch,...creators}
  }
)
class ReactRedux extends Component{
  constructor(){
    super()
  }
  Dispatchadd=()=>{
    this.props.dispatch({type:'ADD',payload:10})
  }
  
  render(){
    const {num, add,minus} = this.props
    console.log(this.props,'this.props')
    return(
      <div>
        <h3>ReactRedux-page</h3>
        <div>
          <p>{num}</p>
          <button onClick={this.Dispatchadd}>Dispatchadd+10</button>
          <button onClick={add}>add+20</button>     
          <button onClick={minus}>minus-10</button>       
        </div>
      </div>
    )
  }
}
export default ReactRedux