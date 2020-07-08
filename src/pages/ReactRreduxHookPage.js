import React,{useCallback,useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
export default function ReactReduxHookPage(){
  const num = useSelector(state => state)
  const dispatch = useDispatch()
  const add=useCallback(
    ()=>{
      dispatch({type:'ADD'})
    },[]
  )
  console.log(num,'num')
  return(
    <div>
      <h3>
      ReactReduxHookPage
      </h3>
      <div>
        {num}
      </div>
      <button onClick={add}>add</button>
    </div>
  )
}