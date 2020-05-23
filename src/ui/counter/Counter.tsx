import React from 'react';
import mod from "./Counter.module.sass"
import MaxValue from "./мaxValue/MaxValue";
import MinValue from "./мinValue/MinValue";

const Counter: React.FC = () => {

    return (
        <div className={mod.counterWrapper}>
            <MaxValue />
            <MinValue />
            <div className={mod.buttonsWrapper}>
                <button className={mod.countButton}>COUNT</button>
                <button className={mod.resetButton}>RESET</button>
            </div>
        </div>
    )
};

export default Counter;