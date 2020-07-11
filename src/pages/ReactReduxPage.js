import React,{Component} from 'react'
// import {connect} from 'react-redux'
import {connect} from '../MyReactRedux'
// import {bindActionCreators} from 'redux'
import {bindActionCreators} from '../MybindActionCreators'
@connect(
  //将state放在props上一份； mapStateToProps
  (state)=>({num:state}),
  // dispatch 类型：obj|fn 将 dispatch放在poros上一份； mapDispatchToProps
  // dispatch写法一： 不含本身的dispatch，只能调用对象里面写的方法；
  {
    add:()=>({
      type:'ADD',
      payload:20
    })
  },
  // dispatch 写法二：
  // dispatch=>{
    //(dispatch,ownProps)=>{
    // 方法一：直接这样写，到导出
    // const add =()=>dispatch({ type:'ADD', payload:20})
    // const minus=()=>dispatch({type:'MINUS', payload:10})
    // return {dispatch, add, minus}
    // 方法二： 使用bindActionCreators 来进行合并
  //   let creators={
  //     add:(ooo)=>({type:'ADD',...ooo}),
  //     minus:()=>({type:'MINUS', payload:10})
  //   }
  //   creators=bindActionCreators(creators, dispatch)
  //   return {dispatch,...creators}
  // },
  (stateProps,dispatchProps,ownProps)=>{
    return {
      ...dispatchProps,
      ...ownProps,
      own:'自定义内容'
    }
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
    // console.log(this.props,'props')
    const {num,minus,add} = this.props
    return(
      <div>
        <h3>ReactRedux-page</h3>
        <div>
          <p>{num}</p>
          <button onClick={this.Dispatchadd}>Dispatchadd+10</button>
          <button onClick={()=>{add({payload:20})}}>add+20</button>     
          <button onClick={minus}>minus-10</button>       
        </div>
      </div>
    )
  }
}
export default ReactRedux


