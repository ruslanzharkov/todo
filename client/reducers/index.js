import { combineReducers } from 'redux'
import * as types from '../actions/index'



const todoReducer = (state = [], action) => {
	switch(action.type) {
    case 'FETCH_TODO_SUCCESS':
            return action.todos;
		case 'CREATE_TODO_SUCCESS':
			return  [
				...state,
				Object.assign({} , action.todo)
			];
    case 'UPDATE_TODO_SUCCESS':
        action;
        return [
            ...state.map(todo => {
                if(todo._id === action.todo._id) {
                    return Object.assign({}, todo, { text: action.todo.text})
                }
            return todo
            })];
		case 'DELETE_DATA_SUCCESS':
			const newState = Object.assign([], state);
      const indexOfTodoToDelete = state.findIndex(todo => {
          return todo._id === action.todo._id
      });
      newState.splice(indexOfTodoToDelete, 1);
      return newState;
        case 'CHECK_DATA_SUCCESS':
            if (state._id !== action._id) {
                return state
            }
            return Object.assign({}, state, {
                completed: !state.completed
            })
		default:
			return state
	}
};


const todoApp = combineReducers({
    todos: todoReducer
});

export default todoApp
