import React,{Component,useEffect} from 'react'
// import { BrowserRouter as Router,Route, Link, Switch,useRouteMatch,useHistory,useParams,useLocation, withRouter,Prompt} from "react-router-dom";
import {
  BrowserRouter as Router,
  Route, 
  Link, 
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
  useParams,
  withRouter,
  Prompt
} from "./my-react-router-dom";
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import UserPage from './pages/UserPage'
import _404Page from './pages/_404Page';

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

        <Switch>
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
           <Route path="/product/:id" children={()=><Product></Product>}></Route>
           {/* <Route path="/product/:id" component={Product}></Route> */}
           {/* <Route component={_404Page}></Route> */}
        </Switch>           
      </Router>
    </div>
  )
}

// @withRouter
// class Product extends Component{
//   render() {
//     // const {id} = this.props
//     console.log(this.props,'props')
//     return<div>
//       {/* <h3>Product- id:{id}</h3> */}
//       <h3>Product- id</h3>
//     </div>
//   }
// }



// function Product(){
//   console.log('Product-props:', props)
//   useEffect(() => {
//     // effect
//     return () => {
//       console.log('cleanup')
//       // cleanup
//     }
//   }, [])
//   const match =useRouteMatch()
//   const history =useHistory()
//   const location =useLocation()
//   const Params = useParams()
//   console.log('match:',match);
//   console.log('history:',history);
//   console.log('location:',location);
//   console.log('Params:',Params);
//   // const {match} = props
//   const {params,url} =match
//   const {id} =params
//    return <div>
//       <h3>Product- id:{id}</h3>
//       <div>
//         <Link to={url+'/detail'}>详情</Link>
//         <Route path={url+'/detail'} component={Detail}/>
//       </div>
//     </div>
// }
// //Detail 商品详情
// function Detail(){
//   return<div>
//     <h4>
//         详情来了———————— Detail
//     </h4>
   
//   </div>
// }


class Product extends Component{
  constructor(){
    super()
    this.state={
      cofirm:true,
    }
  }
  change=()=>{
    this.setState({
      cofirm: !this.state.cofirm
    })
  }
  render(){
    console.log('this.state.cofirm',this.state.cofirm)
    return(
      <div>
        <h3>Product</h3>
        <button onClick={this.change}>change</button>
        <Prompt when={this.state.cofirm} message="确定要离开这个页面吗？"></Prompt>
      </div>
    )
  }
}