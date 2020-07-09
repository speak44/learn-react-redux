
function bindActionCreator(creator,dispatch){
// console.log(creator,'creator')
  return (...args) => {
    // console.log(args,'...args') // 函数在onClick 调用的时候传递进来的参数
    dispatch(creator(...args))
  }
}

// 接收两个参数 creators, dispatch
export function bindActionCreators(creators, dispatch){
  // console.log(creators,'creators')
  // 定一个一个空的对象
  let obj={} // 用来导出
  // 首先需要遍历出来，给每一项加上dispatch；
  for(let key in creators){
    obj[key] = bindActionCreator(creators[key],dispatch)
  }
  // console.log(obj,'obj')
  return obj
}