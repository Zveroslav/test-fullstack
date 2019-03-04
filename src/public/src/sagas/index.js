import  axios from "axios";
import {SERVER_ENDPOINT, C} from "../constans";
import {put, call, takeEvery} from 'redux-saga/effects'


export default function* rootSaga() {
  yield takeEvery(C.LOAD_USER_LIST, listUserLoader);
}



function* listUserLoader() {
  yield put({type: C.PROCESS});
  const res = yield call(getUsersRequest);
  if (res) {
    yield put({type: C.DONE});
    yield put({userList: res, type: C.GET_USER_LIST});
  } else {
    yield put({type: C.FAIL});
  }
}

async function getUsersRequest () {
  const {data} = await axios.get(SERVER_ENDPOINT + '/users');
  if (data && Array.isArray(data)){
    return data;
  }
  return false;
}
