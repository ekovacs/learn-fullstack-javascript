import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';



class App extends React.Component  {

    state = { 
        pageHeader: 'Naming contest'
    };
    
    componentDidMount() {

        // called when the DOM is loaded
        // any 3rd party integrations, ajax calls, timers / listeners should be setup here
    }

    componentWillUnmount() {
        // clean up anything that may leak: timers, listeners, etc...
    }

    render () {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <div>
                    {
                        this.props.contests.map(contest => 
                            <ContestPreview {...contest} />
                    )}
                    
                </div>
            </div>
        );
    };

    
};

export default App;