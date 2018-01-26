import { VALUE_CHANGED } from './types';

export const valueChanged = (value) => {
  return {
    type: VALUE_CHANGED,
    payload: value
  };
};
