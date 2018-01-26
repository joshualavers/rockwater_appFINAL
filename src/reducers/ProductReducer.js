import {
  VALUE_CHANGED
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case VALUE_CHANGED:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
