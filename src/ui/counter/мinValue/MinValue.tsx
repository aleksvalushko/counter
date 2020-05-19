import React, {useEffect} from 'react';
import mod from "./MinValue.module.sass"
import {connect} from "react-redux";
import {AppState} from "../../../bll/store";
import {getMinValue, increaseMinValue, reduceMinValue} from "../../../bll/counterReducer";

type MapStatePropsType = {
    minValue: number
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
                <button onClick={props.increaseMinValue}>+</button>
                <input type='text' value={props.minValue} className={mod.counterValue}/>
                <button onClick={props.reduceMinValue}>-</button>
            </div>
        </div>
    )
};

const mapStateToProps = (state: AppState) => {
    return {
        minValue: state.counter.minValue
    }
};

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppState>
(mapStateToProps, {getMinValue, increaseMinValue, reduceMinValue})(MinValue);