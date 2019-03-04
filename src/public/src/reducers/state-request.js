import {C} from '../constans'

export const stateRequest = (state = {}, action) => {
  switch (action.type) {
    case C.FAIL:
      return {fail: true};
    case C.PROCESS:
      return {process: true};
    case C.DONE:
      return {process: false, fail: false};
    default:
      return state;
  }
};
