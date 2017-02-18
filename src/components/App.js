import React from 'react';
import Header from './Header';
import Content from './Content';

const App = () => {
    return (
        <div className="App">
           <Header message="Naming Contests"/>
           <Content />
        </div>
    );
};

export default App;