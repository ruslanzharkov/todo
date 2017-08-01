import axios from 'axios';
import { apiPrefix } from '../../etc/config.json';

export default {
    listTodos() {
        return axios.get(`${apiPrefix}/todos`)
    },

    createTodo(data) {
        return axios.post(`${apiPrefix}/todos`, data);
    },

    updateTodo(data) {
        return axios.put(`${apiPrefix}/todos/${data.id}`, data);
    },

    deleteTodo(todoId) {
        return axios.delete(`${apiPrefix}/todos/${todoId}`);
    }
}