import React from 'react';
import mod from './App.module.sass';
import Counter from './ui/counter/Counter';
import Result from "./ui/result/Result";

const App = () => {

    return (
        <div className={mod.App}>
            <h1>Factorial counter</h1>
            <div className={mod.wrapper}>
                <Counter />
                <Result />
            </div>
        </div>
    );
};

export default App;
