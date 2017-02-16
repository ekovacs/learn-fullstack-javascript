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


// adding the .isRequired makes sure the value is required
App.propTypes = {
    headerMessage: React.PropTypes.string.isRequired
};


// Default value for props can be defined like this:
App.defaultProps = {
    headerMessage: 'Hello!'
}

ReactDOM.render(
    <App headerMessage="rendered by a react component!" />,
    document.getElementById("root")
);
