import React from 'react'
// import '../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import './AddForm.css'
import Button from './Button';

const AddForm = (props) => {
  let textInput = '';
  return (
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 form-center">
          <form onSubmit={e => {
            e.preventDefault();
              var note = {
                  text: textInput.value
              };
              props.submitTodo(note);
              e.target.reset();
            }}>

              <h1 className="todo-title">ToDo application</h1>
              <label htmlFor="">
              <input type="text" name="text" className="form-control"
                     ref={node => textInput  = node} placeholder="Write down some todo"/></label>
              <Button/>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
  )
};

export default AddForm