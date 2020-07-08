import React,{ useState,useEffect } from 'react'
export default function HookPage(){
  const [date, setDate]=useState(new Date())
  const [count, setCount] = useState(0)
  // 一个函数可以有多个 useEffect
  useEffect(() => {
    console.log('数字发生改变：' ,count)
  }, [count]); // 有依赖项，是count； 所以每次点击更改count的时候进行更新，就相当于生命周期update
  useEffect(()=>{
    console.log('setDate')
    const timer = setInterval(()=>{
      setDate(new Date())
    },1000)
    // 清除定时器，相当于声明周期 willUnmount
    return()=>clearInterval(timer)
  },[]) // 没有依赖项，就相当于DidMount
  return(
    <div>
      <h3>
      HookPage
      </h3>
      <div>
        <span>
        数字：{count}
        </span>
        <button onClick={()=>setCount(count+1)}>增加</button>
      </div>
      <div>
        现在时间：{date.toLocaleTimeString()}
      </div>
    </div>
  )
}