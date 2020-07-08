import {createStore} from 'redux'

function createReducer(store=1,{type, payload=1}){
  // console.log(store)
  switch (type) {
    case 'ADD':
      return store+payload
      break;
      case 'MINUS':
      return store-payload
      break;  
    default:
      return store
      break;
  }
}
const store = createStore(createReducer)
export default store