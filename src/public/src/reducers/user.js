import {C} from '../constans'

export const user = (state = {}, action) => {
  switch (action.type) {
    case C.USER_LOGIN:
      return {...state, user: action.user};
    case C.GET_USER_LIST:
      return {...state, userList: action.userList};
    default:
      return state;
  }
};
