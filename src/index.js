import React from 'react';
import ReactDOM from 'react-dom';


const color = Math.random() > 0.5 ? 'green' : 'red'

/* color: color => can be shorthanded as color, since the property name and its variable value name matches*/
ReactDOM.render(
    <h2 style={{color}}>Hello, rendered by React! Powered by JSX! -- {Math.random()}</h2>,
    document.getElementById("root")
);
