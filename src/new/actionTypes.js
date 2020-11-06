import { createNamespacedActionTypes } from "lib/NamespacedRedux"

export default createNamespacedActionTypes("add")({
  CHANGE_TODO_TEXT: 'CHANGE_TODO_TEXT',
  ADD_TODO: 'ADD_TODO',
});
