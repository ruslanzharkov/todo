import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const AddForm = (props) => {
  let textInput = '';
  return (
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4"><center>
          <form onSubmit={e => {
            e.preventDefault();
              var note = {
                  text: textInput.value
              };
              props.submitTodo(note);
              e.target.reset();
            }}>
            <label>
              <center>Add your todo</center>
              <input type="text" name="text" className="form-control"
                     ref={node => textInput  = node} />
            </label>
            <button type="submit" className="btn btn-warning">submit</button>
          </form></center>
        </div>
        <div className="col-md-4"></div>
      </div>
  )
}

export default AddForm