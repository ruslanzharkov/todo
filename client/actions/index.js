import axios from 'axios'
import * as types from '../constants/actionTypes'
import { apiPrefix } from '../../etc/config.json'

export const fetchTodosSuccess = todos => ({
  type: types.FETCH_TODO_SUCCESS,
  todos,
});

export const createTodoSuccess = (todo) => {
    return {
        type: types.CREATE_TODO_SUCCESS,
        todo
    }
};

export const updateTodoSuccess = (todo) => {
    return {
        type: types.UPDATE_TODO_SUCCESS,
        todo
    }
};

export const deleteTodoSuccess = (todo) => {
    return {
        type: types.DELETE_DATA_SUCCESS,
        todo
    }
};

export const checkTodoSuccess = (todo) => {
    return {
        type: types.CHECK_DATA_SUCCESS,
        todo
    }
};

export const fetchTodos = () => {
    return (dispatch) => {
        return  axios.get(`${apiPrefix}/todos`)
            .then(response => {
                dispatch(fetchTodosSuccess(response.data))
            })
            .catch(err => {
                throw(err)
            })
    }
};

export const createTodo = (todo) => {
    return (dispatch) => {
        return axios.post(`${apiPrefix}/todos`, todo)
            .then(response => {
                dispatch(createTodoSuccess(response.data))
            })
            .catch(err => {
                throw(err)
            })
    }
};

export const updateTodo = (todo) => {

    return (dispatch) => {
        return axios.put(`${apiPrefix}/todos/${todo.id}`, todo)
            .then(response => {
                dispatch(updateTodoSuccess(response.data))
            })
            .catch(err => {
                throw(err)
            })
    }
};

export const deleteTodo = (todoId) => {
    return (dispatch) => {
        return axios.delete(`${apiPrefix}/todos/${todoId}`)
            .then(response => {
                dispatch(deleteTodoSuccess(response.data))
            })
            .catch(err => {
                throw(err)
            })
    }
};

export const checkTodo = (todo) => {
    return (dispatch) => {
        return axios.put(`${apiPrefix}/todos/${todo._id}`, todo)
            .then(response => {
                dispatch(updateTodoSuccess(response.data))
            })
            .catch(err => {
                throw(err)
            })
    }
};

