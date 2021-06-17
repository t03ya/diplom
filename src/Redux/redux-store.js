import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import carsReducer from "./carsReducer";
import driversReducer from './driversReducer'

let reducers = combineReducers({
    cars: carsReducer,
    drivers: driversReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;