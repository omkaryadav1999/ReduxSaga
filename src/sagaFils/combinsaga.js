import { all } from "redux-saga"
import GetApi from "./ResponseSaga"

function* rootSaga() {
    yield all([GetApi()])
}

export default rootSaga