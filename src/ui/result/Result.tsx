import React, {useEffect} from 'react';
import mod from "./Result.module.sass";
import {connect} from "react-redux";
import {AppState} from "../../bll/store";
import {getResult} from "../../bll/counterReducer";

type MapStatePropsType = {
    result: number
    maxValue: number
    minValue: number
}

type MapDispatchPropsType = {
    getResult: () => void
}



const Result: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

    useEffect(() => {
        props.getResult();
    }, [props]);

    return (
        <div className={mod.resultWrapper}>
            {props.result}
        </div>
    )
};

const mapStateToProps = (state: AppState) => {
    return {
        result: state.counter.result,
        maxValue: state.counter.maxValue,
        minValue: state.counter.minValue
    }

};

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppState>(mapStateToProps, {getResult})(Result);