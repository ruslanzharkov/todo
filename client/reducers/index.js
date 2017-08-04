import { combineReducers } from 'redux'
import * as types from '../actions/index'



const todoReducer = (state = [], action) => {
	switch(action.type) {
        case 'FETCH_TODO_SUCCESS':
            return action.todos
		case 'CREATE_TODO_SUCCESS':
			return  [
				...state,
				Object.assign({} , action.todo)
			]
		case 'UPDATE_TODO_SUCCESS':
			const todos = state.todos.map((todo) =>{
				if(todo._id === action.todo._id) {
					return Object.assign({}, todo, { text: action.todo.text});
				}
				return todo;
			});
			return todos;
		case 'DELETE_DATA_SUCCESS':
			const newState = Object.assign([], state)
            const indexOfTodoToDelete = state.findIndex(todo => {
                return todo._id === action.todo._id
            })
            newState.splice(indexOfTodoToDelete, 1);
            return newState;
		default:
			return state
	}
}


const todoApp = combineReducers({
  todos: todoReducer
})

export default todoApp
