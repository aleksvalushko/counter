import React, {useEffect} from 'react';
import mod from "./MinValue.module.sass"
import {connect} from "react-redux";
import {AppState} from "../../../bll/store";
import {getMinValue, increaseMinValue, reduceMinValue} from "../../../bll/counterReducer";

type MapStatePropsType = {
    minValue: number
    maxValue: number
}

type MapDispatchPropsType = {
    getMinValue: () => void
    increaseMinValue: () => void
    reduceMinValue: () => void
}



const MinValue: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

    useEffect( () => {
        props.getMinValue();
    }, [props]);

    return (
        <div className={mod.minValue}>
            <div className={mod.title}>Min value:</div>
            <div className={mod.buttons}>
                {props.minValue >= props.maxValue
                    ? <button onClick={props.increaseMinValue} disabled={true}>+</button>
                    : <button onClick={props.increaseMinValue} disabled={false}>+</button>}
                <input type='text' value={props.minValue} className={mod.counterValue}/>
                {props.minValue > 0
                    ? <button onClick={props.reduceMinValue} disabled={false}>-</button>
                    : <button onClick={props.reduceMinValue} disabled={true}>-</button>}
            </div>
        </div>
    )
};

const mapStateToProps = (state: AppState) => {
    return {
        minValue: state.counter.minValue,
        maxValue: state.counter.maxValue
    }
};

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppState>
(mapStateToProps, {getMinValue, increaseMinValue, reduceMinValue})(MinValue);