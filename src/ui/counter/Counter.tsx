import React from 'react';
import mod from "./Counter.module.sass"
import MaxValue from "./мaxValue/MaxValue";
import MinValue from "./мinValue/MinValue";
import {connect} from 'react-redux';
import {AppState} from "../../bll/store";
import {resetAllValues, setResult} from "../../bll/counterReducer";

type MapStatePropsType = {
    maxValue: number
    minValue: number
    result: number
}

type MapDispatchPropsType = {
    setResult: () => void
    resetAllValues: () => void
}

const Counter: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

    return (
        <div className={mod.counterWrapper}>
            <MaxValue/>
            <MinValue/>
            <div className={mod.buttonsWrapper}>
                <button className={mod.countButton} onClick={props.setResult}>COUNT</button>
                <button className={mod.resetButton} onClick={props.resetAllValues}>RESET</button>
            </div>
        </div>
    )
};

const mapStateToProps = (state: AppState) => {
    return {
        maxValue: state.counter.maxValue,
        minValue: state.counter.minValue,
        result: state.counter.result
    }
};

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppState>
(mapStateToProps, {setResult, resetAllValues})(Counter);