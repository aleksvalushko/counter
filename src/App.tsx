import React from 'react';
import mod from './App.module.sass';
import Counter from './ui/counter/Counter';

const App = () => {

    return (
        <div className={mod.App}>
            <h1>Counter</h1>
            <Counter />
        </div>
    );
};

export default App;
