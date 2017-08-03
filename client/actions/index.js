import axios from 'axios'
import * as types from '../constants/actionTypes'
import { apiPrefix } from '../../etc/config.json'

export const fetchTodosSuccess = todos => ({
  type: types.FETCH_TODO_SUCCESS,
  todos,
})

export const createTodoSuccess = (todo) => {
  return {
    type: types.CREATE_TODO_SUCCESS,
    todo
  }
}

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
}

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
}
