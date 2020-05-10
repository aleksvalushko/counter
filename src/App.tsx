import React from 'react';
import mod from './App.module.sass';
import Counter from './ui/counter/Counter';

const App = () => {

    return (
        <div className={mod.App}>
            <Counter />
        </div>
    );
};

export default App;
