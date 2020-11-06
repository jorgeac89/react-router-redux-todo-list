import { connect } from 'react-redux';
import Actions from './actions';
import component from './component';

const mapStateToProps = state => ({
  ...state.list,
  todos: state.list.todos.slice(
    state.list.todosPerPage * state.list.currentPage, 
    state.list.todosPerPage * (state.list.currentPage + 1)),
  currentPage: state.list.currentPage,
  pageCount: Math.ceil(state.list.todos.length / state.list.todosPerPage),
  fetching: state.list.fetching,
  fetched: state.list.fetched,
  error: state.list.error
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: todoIndex => {
    dispatch(Actions.toggleTodo(todoIndex));
  },
  removeTodo: todoIndex => {
    dispatch(Actions.removeTodo(todoIndex));
  },
  changePage: pageNumber => {
    dispatch(Actions.changePage(pageNumber));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(component);
