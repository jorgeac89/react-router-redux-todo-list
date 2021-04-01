import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Add = ({ todoText, onChangeTodoText, onAddTodo }) => (
  <>
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between">
        <h2>New todo</h2>
        <Link to="/list" className="font-weight-bold">
          <i className="fas fa-list-alt mr-2" />
          Todo list
        </Link>
      </div>
    </div>
    <form>
      <div className="row mt-3">
        <div className="col-12">
          <textarea
            className="form-control form-control-lg mb-2"
            placeholder="Write the todo text here..."
            value={todoText}
            onChange={onChangeTodoText}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 text-center">
          <button
            type="button"
            className="btn btn-primary font-weight-bold"
            onClick={onAddTodo}
            disabled={!todoText}
          >
            <i className="fas fa-save mr-2" />
            Save
          </button>
        </div>
      </div>
    </form>
  </>
);

Add.propTypes = {
  todoText: PropTypes.string.isRequired,
  onChangeTodoText: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired
};

export default Add;
