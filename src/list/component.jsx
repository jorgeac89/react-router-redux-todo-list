import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { If, IfNot } from 'lib/react-conditionals';

const List = ({
  todos,
  currentPage,
  pageCount,
  fetching,
  fetched,
  error,
  toggleTodo,
  removeTodo,
  changePage
}) => (
  <>
    <div className="row">
      <div className="col-12 d-flex align-items-center justify-content-between">
        <h2>Todo list</h2>
        <Link to="/new" className="font-weight-bold">
          <i className="fas fa-plus-square mr-2" />
          New todo
        </Link>
      </div>
    </div>
    <If check={fetching}>
      <div className="row my-5">
        <div className="col-12 d-flex justify-content-center">
          <div
            className="spinner-border"
            role="status"
            style={{ width: '4rem', height: '4rem' }}
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </If>
    <If check={!error && fetched}>
      <div className="row mt-3">
        <div className="col-12">
          <ul className="list-group list-group-flush">
            {todos.map(todo => (
              <li
                key={todo.id}
                className="list-group-item d-flex align-items-center"
              >
                <If check={todo.completed}>
                  <i
                    role="checkbox"
                    aria-checked="true"
                    aria-label="Done"
                    tabIndex="0"
                    className="far fa-check-square text-muted mr-3"
                    style={{ fontSize: '1.3rem', cursor: 'pointer' }}
                    onClick={() => toggleTodo(todo.id)}
                    onKeyDown={event => {
                      if (event.key === 'Enter') toggleTodo(todo.id);
                    }}
                  />
                  <span className="flex-grow-1 text-muted text-capitalize font-weight-light">
                    <del>{todo.title}</del>
                  </span>
                </If>
                <IfNot check={todo.completed}>
                  <i
                    role="checkbox"
                    aria-checked="false"
                    aria-label="Not done"
                    tabIndex="0"
                    className="far fa-square mr-3"
                    style={{ fontSize: '1.3rem', cursor: 'pointer' }}
                    onClick={() => toggleTodo(todo.id)}
                    onKeyDown={event => {
                      if (event.key === 'Enter') toggleTodo(todo.id);
                    }}
                  />
                  <span className="flex-grow-1 disabled text-capitalize">
                    {todo.title}
                  </span>
                </IfNot>
                <button
                  type="button"
                  className="btn btn-sm btn-danger font-weight-bold text-nowrap ml-2"
                  onClick={() => removeTodo(todo.id)}
                >
                  <i className="fas fa-trash mr-2" />
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <If check={pageCount > 0}>
        <div className="row mt-2">
          <div className="col-12">
            <ReactPaginate
              previousLabel={<i className="fas fa-chevron-left" />}
              nextLabel={<i className="fas fa-chevron-right" />}
              breakLabel="..."
              /* Not necessary */
              // initialPage={currentPage}
              forcePage={currentPage}
              pageCount={pageCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={5}
              onPageChange={data => changePage(data.selected)}
              containerClassName="pagination justify-content-center mb-0 font-weight-bold"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              activeClassName="active"
              activeLinkClassName=""
              disabledClassName="disabled"
            />
          </div>
        </div>
      </If>
    </If>
    <If check={!!error}>
      <div className="row mt-3">
        <div className="col-12">
          <div className="alert alert-danger mb-0" role="alert">
            {error}
          </div>
        </div>
      </div>
    </If>
  </>
);

List.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ),
  currentPage: PropTypes.number,
  pageCount: PropTypes.number,
  fetching: PropTypes.bool,
  fetched: PropTypes.bool,
  error: PropTypes.string,
  toggleTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  changePage: PropTypes.func
};

List.defaultProps = {
  todos: [],
  currentPage: 0,
  pageCount: 0,
  fetching: false,
  fetched: false,
  error: '',
  toggleTodo: () => {},
  removeTodo: () => {},
  changePage: () => {}
};

export default List;
