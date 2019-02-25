import {C} from '../constans'

export const getUserList = () => (
  {type: C.LOAD_USER_LIST}
);

export const loginUser = (user) => (
  {type: C.USER_LOGIN, user}
);
