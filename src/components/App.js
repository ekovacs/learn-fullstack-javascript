import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import axios from 'axios';


class App extends React.Component  {

    state = { 
        pageHeader: 'Naming contest',
        contests: this.props.initialContests
    };
    
    fetchDataFromDB(callback) {
        // 1. fetch data from the DB
       axios.get('/api/contests').then(resp => {
           this.setState({
               contests: resp.data.contests
           });
       }).catch(console.error);

        // 2. pass data to the provided callback function 
        
    }

    componentDidMount() {
        // called when the DOM is loaded
        // any 3rd party integrations, ajax calls, timers / listeners should be setup here
        this.fetchDataFromDB();
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
                        this.state.contests.map(contest => 
                            <ContestPreview key={contest.id} {...contest} />
                    )}
                    
                </div>
            </div>
        );
    };

    
};

export default App;