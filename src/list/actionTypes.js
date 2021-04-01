import { createNamespacedActionTypes } from 'lib/NamespacedRedux';

export default createNamespacedActionTypes('list')({
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  CHANGE_PAGE: 'CHANGE_PAGE',
  FETCH_TODOS_BEGINS: 'FETCH_TODOS_BEGINS',
  FETCH_TODOS_SUCCESS: 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR: 'FETCH_TODOS_ERROR'
});
