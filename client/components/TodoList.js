import React, { Component } from 'react'
import { connect } from 'react-redux'
import { apiPrefix } from '../../etc/config.json'
import * as actions from '../actions/index'
import Form from './AddForm'
import '../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './TodoList.css'

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    createTodo(note) {
        this.props.createTodo(note);
    }

    deleteTodo(noteId) {
        this.props.deleteTodo(noteId);
    }

    render() {
        // this.props;
        // debugger;
        return (
    <div className="container">
        <Form submitTodo={this.createTodo.bind(this)}/>
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <ul className="list-group">
                    {this.props.todos.map(todo => (
                        <li key={todo._id} className="list-group-item-info todo" id={todo._id}>
                            {`${todo.text}`}
                            <button className="btn btn-danger icon" onClick={this.deleteTodo.bind(this, todo._id)}>&#10007;</button>
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
        deleteTodo: todo => dispatch(actions.deleteTodo(todo))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
