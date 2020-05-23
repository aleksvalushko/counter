import React, {useState} from 'react';
import mod from "./Counter.module.sass"
import MaxValue from "./мaxValue/MaxValue";
import MinValue from "./мinValue/MinValue";

const Counter: React.FC = () => {

    return (
        <div className={mod.counterWrapper}>
            <MaxValue />
            <MinValue />
        </div>
    )
};

export default Counter;