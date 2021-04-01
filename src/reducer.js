import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import New from 'new';
import List from 'list';

export default history =>
  combineReducers({
    router: connectRouter(history),
    new: New.reducer,
    list: List.reducer
  });
