// return(
//   <RouterConetxt.Provider value={props}>
//     {props.match // match的情况下
//       ? children // 先判断 children 是否匹配
//          // children 的数据类型： fn， 对象， 数组
//         ? typeof children === 'function' //  如果是fn 
//           ? __DEV__
//             ? evalChilderDev(children,props,this.props.path)
//             :children(props) // 执行fn 函数
//           :children // children 存在，但是不是fn；组建复合的形式存在，就直接渲染children
//         : component // 如果没有children；判断component， 优先级第二
//         ? React.createElement(component, props) // component 存在，使用React.createElement(),渲染当前的组建
//         : render // component 也不存在，最后判断render
//         ? render(props) // render 存在，直接执行
//         : null // 都不存在 返回null
//       : typeof children === 'function' // 不match，不匹配的情况直接看children是不是一个fn
//       ? __DEV__
//         ? evalChilderDev(children,props, this.props.path)
//         :children(props) // 是fn 直接执行
//       :null // 不是返回null
//     }
//   </RouterConetxt.Provider>
// )

// 不管是否匹配都会渲染children，但是呢，如果不匹配只去渲染，children是fn的情况