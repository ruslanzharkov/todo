import React, { Component } from 'react'
import { connect } from 'react-redux'
import { apiPrefix } from '../../etc/config.json'
import * as actions from '../actions/index'
import Form from './AddForm'
import '../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './TodoList.css'
import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter
} from 'react-modal-bootstrap'


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            todoId: '',
            todoText: '',
            todoCompleted: false
        }
        this.openModal = this.openModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.textChange = this.textChange.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }

    openModal() {
        this.setState({
            isOpen: true
        });
    }

    hideModal(){
        this.setState({
            isOpen: false
        });
    }

    getTodo(todo) {
        this.setState({
            todoId: todo._id,
            todoText: todo.text
        })
        // this.state.todoId = todo._id;
        // this.state.todoText = todo.text;
        this.openModal();
    }

    textChange(event) {
        this.setState({
            todoText: event.target.value
        })
    }

    createTodo(note) {
        this.props.createTodo(note);
    }

    deleteTodo(noteId) {
        this.props.deleteTodo(noteId);
    }

    updateTodo() {
        const newTodo = {
            id: this.state.todoId,
            text: this.state.todoText
        };
        this.props.updateTodo(newTodo);
        this.hideModal();
    }

    checkTodo(todo) {
        if(todo.completed === false) {
            document.getElementById(todo._id).style.textDecoration = 'line-through';
            todo.completed = true;
            this.props.checkTodo(todo);
        } else {
            document.getElementById(todo._id).style.textDecoration = 'none';
            todo.completed = false;
            this.props.checkTodo(todo);
        }
    }

    render() {
        // this.props;
        // debugger;
        return (
        <div className="container">
            <Form submitTodo={this.createTodo.bind(this)}/>
            <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal}>
                <ModalHeader>
                    <ModalClose onClick={this.hideModal}/>
                    <ModalTitle>Change your Todo</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <div>
                        <input
                            type='text'
                            className="text-update"
                            placeholder="Enter title"
                            value={this.state.todoText}
                            onChange={this.textChange}
                        />
                    </div>
                </ModalBody>
                <ModalFooter>

                    <button className="btn btn-success" onClick={this.updateTodo}>
                        Update Note
                    </button>
                </ModalFooter>
            </Modal>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <ul className="list-group">
                        {this.props.todos.map(todo => (
                            <li key={todo._id} className="list-group-item-info todo" id={todo._id}
                                style={{
                                    textDecoration: todo.completed ? 'line-through' : 'none'
                                }}>
                                    {todo.text}
                                <span className="icon-check" onClick={this.checkTodo.bind(this, todo)}>&#10003;</span>
                                <span className="icon-update" onClick={this.getTodo.bind(this, todo)}>&#10000;</span>
                                <span className="icon-delete" onClick={this.deleteTodo.bind(this, todo._id)}>&#10007;</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createTodo: todo => dispatch(actions.createTodo(todo)),
        deleteTodo: todo => dispatch(actions.deleteTodo(todo)),
        updateTodo: todo => dispatch(actions.updateTodo(todo)),
        checkTodo: todo => dispatch(actions.checkTodo(todo)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
