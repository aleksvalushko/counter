import {counterApi} from "../dal/api";
import {AppState, InferActonType} from "./store";

let initState = {
    value: 0
};

type InitStateType = typeof initState;

const counterReducer = (state: InitStateType = initState, action: OwnActionsType) => {
    switch (action.type) {
        case "counter/counterReducer/GET_VALUE_SUCCESS":
            return {
                ...state,
                value: action.value
            };
            case "counter/counterReducer/INCREASE_VALUE_SUCCESS":
            return {
                ...state,
                value: action.value
            };
        case "counter/counterReducer/REDUCE_VALUE_SUCCESS":
            return {
                ...state,
                value: action.value
            };
        default:
            return state;
    }
};

type OwnActionsType = InferActonType<typeof actions>;

//ActionCreators

const actions = {
    getValueSuccess: (value: number) => ({type: 'counter/counterReducer/GET_VALUE_SUCCESS', value} as const),
    increaseValueSuccess: (value: number) => ({type: 'counter/counterReducer/INCREASE_VALUE_SUCCESS', value} as const),
    reduceValueSuccess: (value: number) => ({type: 'counter/counterReducer/REDUCE_VALUE_SUCCESS', value} as const)
};

//Thunks
export const getValue = () => async (dispatch: Function) => {
    let response = await counterApi.getCounterValue();
    dispatch(actions.getValueSuccess(response));
};

export const increaseValue = () => async (dispatch: Function, getState: () => AppState) => {
    let newValue = getState().counter.value + 1;
    let result = await counterApi.increaseCounterValue(newValue);
    dispatch(actions.increaseValueSuccess(result));
};

export const reduceValue = () => async (dispatch: Function, getState: () => AppState) => {
    let newValue = getState().counter.value - 1;
    let result = await counterApi.reduceCounterValue(newValue);
    dispatch(actions.reduceValueSuccess(result));
};

export default counterReducer;