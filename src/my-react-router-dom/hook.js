import React,{useContext} from 'react'
import { RouterContext } from './Context';

// 就是History对象
export function useHistory(){
  // 返回的就是history对象
  // 在BrowserRouter中，我们使用import {createBrowserHistory} from 'history'；const history= createBrowserHistory() 
  // 在hook对象中，我们要使用 usecontext；
  return useContext(RouterContext).history;
}
// useLocation: 
// {pathname: "/product/123", search: "", hash: "", state: undefined, key: "y14yf2"}
// hash: ""
// key: "y14yf2"
// pathname: "/product/123"
// search: ""
// state: undefined
// }
export function useLocation(){
  return useContext(RouterContext).location;
}

// match: 
// {path: "/product/:id", url: "/product/123", isExact: true, params: {…}}
// isExact: true
// params: {id: "123"}
// path: "/product/:id"
// url: "/product/123"
// }
export function useRouteMatch(){
  return useContext(RouterContext).match;
}

// useParams:
// {id: "123"}
export function useParams(){
  const match=useContext(RouterContext).match;
  return match? match.params:{}
}