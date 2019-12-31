import { handleActions } from 'redux-actions';
import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO
} from '../../actions/ToDo/actionTypes';


const persisted_todoPage = JSON.parse(localStorage.getItem('todoPage'))

const todos = (persisted_todoPage && persisted_todoPage.todos) || {
  isFetching:false,
  data:{},
  error:null,
}

const initialState = {
    todos
}

const addTodo={
  [ADD_TODO]:(state = initialState, {payload})=>(
    {...state,
      todos:{
        ...state.todos,
        data:{
          ...state.todos.data,
          [new Date().getTime()]:{
            id:new Date().getTime(),
            name: payload.name,
            done: payload.done,
          }
        }
      }
    }
  )
}

const updateTodo={
  [UPDATE_TODO]:(state = initialState, {payload})=>(
    {...state,
      todos:{
        ...state.todos,
        data:{
          ...state.todos.data,
          [payload.id]:{
            ...state.todos.data[payload.id],
            ...payload
          }
        }
      }
    }
  )
}

const deleteTodo={
  [DELETE_TODO]:(state = initialState, {payload})=>{
    delete state.todos.data[payload]
    return {...state}
  }
}

const todoPage = handleActions(
  {
    ...addTodo,
    ...updateTodo,
    ...deleteTodo
  },
  initialState,
);

export default todoPage;
