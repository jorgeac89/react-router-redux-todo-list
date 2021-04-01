import ActionTypes from './actionTypes';

const initialState = {
  fetching: false,
  fetched: false,
  todos: [],
  todosPerPage: 10,
  currentPage: 0,
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS_BEGINS:
      return { ...state, fetching: true, fetched: false };
    case ActionTypes.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        todos: [...state.todos, ...action.todos]
      };
    case ActionTypes.FETCH_TODOS_ERROR:
      return { ...state, fetching: false, fetched: false, error: action.error };
    case ActionTypes.ADD_TODO:
      return { ...state, todos: [...state.todos, action.newTodo] };
    case ActionTypes.TOGGLE_TODO: {
      const todoIndex = state.todos.findIndex(
        todo => todo.id === action.todoId
      );
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, todoIndex),
          {
            ...state.todos[todoIndex],
            completed: !state.todos[todoIndex].completed
          },
          ...state.todos.slice(todoIndex + 1)
        ]
      };
    }
    case ActionTypes.REMOVE_TODO: {
      const todoIndex = state.todos.findIndex(
        todo => todo.id === action.todoId
      );
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, todoIndex),
          ...state.todos.slice(todoIndex + 1)
        ]
      };
    }
    case ActionTypes.CHANGE_PAGE:
      return { ...state, currentPage: action.pageNumber };
    default:
      return state;
  }
};

export default reducer;
