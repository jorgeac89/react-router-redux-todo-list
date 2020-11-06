import ActionTypes from './actionTypes';

const initialState = {
  todoText: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_TODO_TEXT:
      return { ...state, todoText: action.newTodoText };
    case ActionTypes.ADD_TODO:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
