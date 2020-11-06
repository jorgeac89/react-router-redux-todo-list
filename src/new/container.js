import { connect } from 'react-redux';
import Actions from './actions';
import component from './component';

const mapStateToProps = state => ({
  todoText: state.new.todoText,
});

const mapDispatchToProps = dispatch => ({
  onChangeTodoText: event => {
    dispatch(Actions.changeTodoText(event.target.value));
  },
  onAddTodo: () => {
    dispatch(Actions.addTodo());
  }
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(component);
