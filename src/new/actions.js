import { push } from 'react-router-redux';
import List from 'list';
import ActionTypes from './actionTypes';

const changeTodoText = newTodoText => ({
  type: ActionTypes.CHANGE_TODO_TEXT,
  newTodoText
});

const addTodo = () => (dispatch, getState) => {
  const newTodo = {
    id: new Date().getTime(),
    title: getState().new.todoText,
    completed: false
  };
  if (!getState().list.fetching && !getState().list.fetched) {
    dispatch(List.actions.fetchTodos()).then(() => {
      dispatch(List.actions.addTodo(newTodo));
      dispatch(List.actions.changeToLastPage());
      dispatch({ type: ActionTypes.ADD_TODO });
      dispatch(push('/list'));
    });
  } else {
    dispatch(List.actions.addTodo(newTodo));
    dispatch(List.actions.changeToLastPage());
    dispatch({ type: ActionTypes.ADD_TODO });
    dispatch(push('/list'));
  }
};

export default { changeTodoText, addTodo };
