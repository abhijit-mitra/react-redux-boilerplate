import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO
} from './actionTypes';

export const addTodo=(value)=>async(dispatch)=>{
  return dispatch({
    type:ADD_TODO,
    payload:{
      name:value,
      done:false
    }
  })
}

export const updateTodo=(payload)=>async(dispatch)=>{
  dispatch({
    type:UPDATE_TODO,
    payload
  })
}

export const deleteTodo=(id)=>async(dispatch)=>{
  dispatch({
    type:DELETE_TODO,
    payload:id
  })
}
