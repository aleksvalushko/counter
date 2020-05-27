import React from 'react';
import mod from "./Counter.module.sass"
import MaxValue from "./мaxValue/MaxValue";
import MinValue from "./мinValue/MinValue";
import {connect} from 'react-redux';
import {AppState} from "../../bll/store";
import {resetAllValues, setResult} from "../../bll/counterReducer";

type MapDispatchPropsType = {
    setResult: () => void
    resetAllValues: () => void
}

const Counter: React.FC<MapDispatchPropsType> = (props) => {

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

export default connect<{}, MapDispatchPropsType, {}, AppState>
(null, {setResult, resetAllValues})(Counter);