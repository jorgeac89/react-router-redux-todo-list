import { fetchTodosEndPoint } from 'config';
import ActionTypes from './actionTypes';

const addTodo = newTodo => ({
  type: ActionTypes.ADD_TODO,
  newTodo
});

const toggleTodo = todoId => ({
  type: ActionTypes.TOGGLE_TODO,
  todoId
});

const changePage = pageNumber => ({
  type: ActionTypes.CHANGE_PAGE,
  pageNumber
});

const changeToLastPage = () => (dispatch, getState) => {
  const lastPage = Math.floor(
    (getState().list.todos.length - 1) / getState().list.todosPerPage
  );
  dispatch(changePage(lastPage));
};

const removeTodo = todoId => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.REMOVE_TODO,
    todoId
  });
  const lastPage = Math.floor(
    (getState().list.todos.length - 1) / getState().list.todosPerPage
  );
  if (lastPage < getState().list.currentPage) {
    dispatch(changeToLastPage());
  }
};

const fetchTodos = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch({ type: ActionTypes.FETCH_TODOS_BEGINS });
    fetch(fetchTodosEndPoint)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error(response.statusText));
      })
      .then(response => {
        const todos = response.map(todo => ({
          id: todo.id,
          title: todo.title,
          completed: todo.completed
        }));
        dispatch({
          type: ActionTypes.FETCH_TODOS_SUCCESS,
          todos
        });
        resolve(todos);
      })
      .catch(error => {
        dispatch({
          type: ActionTypes.FETCH_TODOS_ERROR,
          error: `Request failed: ${error.message}`
        });
        reject(error);
      });
  });

export default {
  addTodo,
  toggleTodo,
  changePage,
  changeToLastPage,
  removeTodo,
  fetchTodos
};
