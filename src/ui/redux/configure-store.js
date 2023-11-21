import createSagaMiddleware from "redux-saga"
import reducers from "./reducers"
import sagas from "./sagas"
import { composeWithDevTools } from "redux-devtools-extension"
import { applyMiddleware, createStore } from "redux"

export const configureStore=()=>{
    const sagaMidWare=createSagaMiddleware()
    const store=createStore(reducers, composeWithDevTools(applyMiddleware(sagaMidWare)))
    sagaMidWare.run(sagas)
    return store
}