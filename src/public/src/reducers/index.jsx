import { combineReducers } from 'redux'
import {user} from './user'
import {stateRequest} from "./state-request";

export default combineReducers({
  user,
  stateRequest
})
