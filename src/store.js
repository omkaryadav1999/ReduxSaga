import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./Redux/reducer/combineReducer"
import rootSaga from "./sagaFils/ResponseSaga.js"
import createSagaMiddleware from "@redux-saga/core"

const sagaMiddelware = createSagaMiddleware()

const Store = configureStore(
    {
        reducer: rootReducer,
        middleware: () => [sagaMiddelware]
    }
)

sagaMiddelware.run(rootSaga)

export default Store