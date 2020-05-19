import {counterApi} from "../dal/api";
import {AppState, InferActonType} from "./store";

let initState = {
    maxValue: 0,
    minValue: 0,
    isDisabled: false
};

type InitStateType = typeof initState;

const counterReducer = (state: InitStateType = initState, action: OwnActionsType) => {
    switch (action.type) {
        case "counter/counterReducer/GET_MIN_VALUE_SUCCESS":
            return {
                ...state,
                minValue: action.minValue
            };
            case "counter/counterReducer/INCREASE_MIN_VALUE_SUCCESS":
            return {
                ...state,
                minValue: action.minValue
            };
        case "counter/counterReducer/REDUCE_MIN_VALUE_SUCCESS":
            return {
                ...state,
                minValue: action.minValue
            };
        case "counter/counterReducer/GET_MAX_VALUE_SUCCESS":
            return {
                ...state,
                maxValue: action.maxValue
            };
        case "counter/counterReducer/INCREASE_MAX_VALUE_SUCCESS":
            return {
                ...state,
                maxValue: action.maxValue
            };
        case "counter/counterReducer/REDUCE_MAX_VALUE_SUCCESS":
            return {
                ...state,
                maxValue: action.maxValue
            };
        case "counter/counterReducer/IS_DISABLE__SUCCESS":
            return {
                ...state,
                isDisabled: action.isDisabled
            };
        default:
            return state;
    }
};

type OwnActionsType = InferActonType<typeof actions>;

//ActionCreators

const actions = {
    getMinValueSuccess: (minValue: number) => ({type: 'counter/counterReducer/GET_MIN_VALUE_SUCCESS', minValue} as const),
    increaseMinValueSuccess: (minValue: number) => ({type: 'counter/counterReducer/INCREASE_MIN_VALUE_SUCCESS', minValue} as const),
    reduceMinValueSuccess: (minValue: number) => ({type: 'counter/counterReducer/REDUCE_MIN_VALUE_SUCCESS', minValue} as const),
    getMaxValueSuccess: (maxValue: number) => ({type: 'counter/counterReducer/GET_MAX_VALUE_SUCCESS', maxValue} as const),
    increaseMaxValueSuccess: (maxValue: number) => ({type: 'counter/counterReducer/INCREASE_MAX_VALUE_SUCCESS', maxValue} as const),
    reduceMaxValueSuccess: (maxValue: number) => ({type: 'counter/counterReducer/REDUCE_MAX_VALUE_SUCCESS', maxValue} as const),
    disableSuccess: (isDisabled: boolean) => ({type: 'counter/counterReducer/IS_DISABLE__SUCCESS', isDisabled} as const)
};

//Thunks
export const getMinValue = () => async (dispatch: Function) => {
    let response = await counterApi.getCounterMinValue();
    dispatch(actions.getMinValueSuccess(response));
};

export const increaseMinValue = () => async (dispatch: Function, getState: () => AppState) => {
    let newValue = getState().counter.minValue + 1;
    let result = await counterApi.increaseCounterMinValue(newValue);
    dispatch(actions.increaseMinValueSuccess(result));
};

export const reduceMinValue = () => async (dispatch: Function, getState: () => AppState) => {
    let newValue = getState().counter.minValue - 1;
    if(newValue >= 0){
        let result = await counterApi.reduceCounterMinValue(newValue);
        dispatch(actions.reduceMinValueSuccess(result));
        dispatch(actions.disableSuccess(false));
    } else {
        dispatch(actions.reduceMinValueSuccess(0));
        dispatch(actions.disableSuccess(true));
    }

};

export const getMaxValue = () => async (dispatch: Function) => {
    let response = await counterApi.getCounterMaxValue();
    dispatch(actions.getMaxValueSuccess(response));
};

export const increaseMaxValue = () => async (dispatch: Function, getState: () => AppState) => {
    let newValue = getState().counter.maxValue + 1;
    let result = await counterApi.increaseCounterMaxValue(newValue);
    dispatch(actions.increaseMaxValueSuccess(result));
};

export const reduceMaxValue = () => async (dispatch: Function, getState: () => AppState) => {
    let newValue = getState().counter.maxValue - 1;
    if(newValue >= 0){
        let result = await counterApi.reduceCounterMaxValue(newValue);
        dispatch(actions.reduceMaxValueSuccess(result));
        dispatch(actions.disableSuccess(false));
    } else if(getState().counter.maxValue === 0) {
        dispatch(actions.reduceMaxValueSuccess(0));
        dispatch(actions.disableSuccess(true));
    }
};

export default counterReducer;