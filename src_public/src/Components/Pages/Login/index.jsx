import {connect} from "react-redux";
import {LoginView} from "./LoginView";
import {getUserList, loginUser} from "../../../actions";

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
      dispatch(loginUser(user))
    }
  })
)(LoginView);
