import React, {useEffect} from 'react';
import mod from "./Counter.module.sass"
import {connect} from "react-redux";
import {AppState} from "../../bll/store";
import {getValue, increaseValue, reduceValue} from "../../bll/counterReducer";

type MapStatePropsType = {
    value: number
}

type MapDispatchPropsType = {
    getValue: () => void
    increaseValue: () => void
    reduceValue: () => void
}



const Counter: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

    useEffect( () => {
        props.getValue();
    }, [props]);

    return (
        <div>
            <h1>Counter</h1>
            <div>Value:</div>
            <div className={mod.buttons}>
                <button onClick={props.increaseValue}>+</button>
                <input type='text' value={props.value} className={mod.counterValue}/>
                <button onClick={props.reduceValue}>-</button>
            </div>
        </div>
    )
};

const mapStateToProps = (state: AppState) => {
    return {
        value: state.counter.value
    }
};

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppState>
(mapStateToProps, {getValue, increaseValue, reduceValue})(Counter);