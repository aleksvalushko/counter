import React, {useEffect} from 'react';
import mod from "./MaxValue.module.sass"
import {connect} from "react-redux";
import {AppState} from "../../../bll/store";
import {getMaxValue, increaseMaxValue, reduceMaxValue} from "../../../bll/counterReducer";

type MapStatePropsType = {
    maxValue: number,
    isDisabled: boolean
}

type MapDispatchPropsType = {
    getMaxValue: () => void
    increaseMaxValue: () => void
    reduceMaxValue: () => void
}



const MaxValue: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

    useEffect( () => {
        props.getMaxValue();
    }, [props]);

    return (
        <div className={mod.maxValue}>
            <div className={mod.title}>Max value:</div>
            <div className={mod.buttons}>
                <button onClick={props.increaseMaxValue}>+</button>
                <input type='text' value={props.maxValue} className={mod.counterValue}/>
                <button onClick={props.reduceMaxValue} disabled={props.isDisabled}>-</button>
            </div>
        </div>
    )
};

const mapStateToProps = (state: AppState) => {
    return {
        maxValue: state.counter.maxValue,
        isDisabled: state.counter.isDisabled
    }
};

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppState>
(mapStateToProps, {getMaxValue, increaseMaxValue, reduceMaxValue})(MaxValue);