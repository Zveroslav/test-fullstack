import {connect} from "react-redux";
import {LoginView} from "../components/Login/LoginView";
import {getUserList, loginUser} from "../actions/users";
import {Auth} from "../utils";

export const Login = connect(
  state => ({
    userList: state.user.userList,
    stateRequest: state.stateRequest
  }),
  dispatch => ({
    loadUsers() {
      dispatch(getUserList())
    },
    saveUser(user) {
      Auth.logIn();
      dispatch(loginUser(user))
    }
  })
)(LoginView);
