import { combineReducers } from 'redux'
import * as types from '../actions/index'



const todoReducer = (state = [], action) => {
	switch(action.type) {
		case 'CREATE_TODO_SUCCESS':
			return  [
				...state,
				Object.assign({} , action.todo)
			]
		case 'FETCH_TODO_SUCCESS':
			return action.todos
		default:
			return state
	}
}


const todoApp = combineReducers({
  todos: todoReducer
})

export default todoApp
