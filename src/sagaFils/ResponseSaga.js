import { GET_RESPONSE, SET_RESPONSE } from "../Redux/constant/userConstatnt"
import { takeEvery, put } from "redux-saga/effects"
import axios from "axios"
function* CallApi() {
    let response = yield axios.get("https://jsonplaceholder.typicode.com/users")
    yield put({ type: SET_RESPONSE, response: response.data })
}


function* GetApi() {
    yield takeEvery(GET_RESPONSE, CallApi)
}

export default GetApi