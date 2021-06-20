import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import carsReducer from "./carsReducer";
import driversReducer from './driversReducer'
import waybillsReducer from './waybillsReducer'

let reducers = combineReducers({
    cars: carsReducer,
    drivers: driversReducer,
    waybills: waybillsReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;