import { push } from 'react-router-redux';
import List from 'list';
import ActionTypes from './actionTypes';

const changeTodoText = newTodoText => ({
  type: ActionTypes.CHANGE_TODO_TEXT,
  newTodoText
});

const addTodo = () => (dispatch, getState) => {
  dispatch(
    List.actions.addTodo({
      id: new Date().getTime(),
      title: getState().new.todoText,
      completed: false
    })
  );
  dispatch(List.actions.changeToLastPage());
  dispatch({ type: ActionTypes.ADD_TODO });
  dispatch(push('/list'));
};

export default { changeTodoText, addTodo };
