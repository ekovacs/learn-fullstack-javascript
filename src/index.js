import React from 'react';
import ReactDOM from 'react-dom';


const App = (props) => {
    return (
        <h2 className="text-center">
                Hello React Component!
                {props.headerMessage}
        </h2>
    );

};

App.propTypes = {
    headerMessage: React.PropTypes.string
};

ReactDOM.render(
    <App headerMessage="rendered by a react component!" />,
    document.getElementById("root")
);
