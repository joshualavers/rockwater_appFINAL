import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';
// import EmployeeFormReducer from './EmployeeFormReducer';
// import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  auth: AuthReducer,
  users: UserReducer
});
