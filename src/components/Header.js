import React from 'react';

const Header = ({ message }) => {
    return (
         <h2 className="Header text-center">
                    {message}
            </h2>
    );
};

//making it required property
Header.propTypes = {
    message: React.PropTypes.string.isRequired
};

export default Header;