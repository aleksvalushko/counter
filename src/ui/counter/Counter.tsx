import React, {useState} from 'react';
import mod from "./Counter.module.sass"

const Counter = () => {

    let [value, setValue] = useState(1);

    let incrementValue = () => {
        setValue(value + 1);
    };

    let decrementValue = () => {
        setValue(value - 1);
    };

    return (
        <div>
            <h1>Counter</h1>
            <div>Value: <span>{value}</span></div>
            <div className={mod.buttons}>
                <button onClick={incrementValue}>+</button>
                <button onClick={decrementValue}>-</button>
            </div>
        </div>
    )
}

export default Counter;