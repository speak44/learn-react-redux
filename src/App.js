import React,{Component,useEffect} from 'react'
// import { BrowserRouter as Router,Route, Link, Switch} from "react-router-dom";
import {
  BrowserRouter as Router,
  Route, 
  Link, 
  // Switch
} from "./my-react-router-dom";
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import UserPage from './pages/UserPage'
import _404Page from './pages/_404Page'

export default function App(){
  return(
    <div className="app">
      <Router>
        <Link to='/'>
          首页
        </Link>
        <Link to='/user'>
          用户中心
        </Link> 
        <Link to='/login'>
          登陆
        </Link>
        <Link to="/product/123">
          商品
        </Link>

        {/* <Switch> */}
         {/* 没有swtich  就会把匹配到的进行现实*/}
           <Route exact path="/" 
          //  children={()=><div>HomePage-children</div>}
          //  component={HomePage}
           render={()=><div>HomePage-render</div>}
           ></Route>
           {/* 优先级顺序 */}
           {/* children>componentrender */}
           <Route path="/user" component={UserPage}></Route>
           <Route path="/login" component={LoginPage}></Route>
           {/* <Route path="/product/:id" children={(props)=><Product {...props}></Product>}></Route> */}
           {/* <Route path="/product/:id" component={Product}></Route> */}
           <Route component={_404Page}></Route>
        {/* </Switch>            */}
      </Router>
    </div>
  )
}

function Product(props){
  console.log('Product-props:', props)
  // useEffect(() => {
  //   // effect
  //   return () => {
  //     console.log('cleanup')
  //     // cleanup
  //   }
  // }, [])
  const {match} = props
  const {params,url} =match
  const {id} =params
   return <div>
      <h3>Product- id:{id}</h3>
      <div>
        <Link to={url+'/detail'}>详情</Link>
        <Route path={url+'/detail'} component={Detail}/>
      </div>
    </div>
}
//Detail 商品详情
function Detail(){
  return<div>
    <h4>
        详情来了———————— Detail
    </h4>
   
  </div>
}