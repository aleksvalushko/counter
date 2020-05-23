import {applyMiddleware, combineReducers, createStore} from "redux";
import counterReducer from "./counterReducer";
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    counter: counterReducer
});

export type AppState = ReturnType<typeof rootReducer>

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActonType< T extends { [key: string]: (...args: any) => any}> = ReturnType<PropertiesType<T>>;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;

//json-server --watch db.json --port 3004
   /* "maxValue": 0,*/
   /* "minValue": 0,*/
   /* "isDisabled": true*/