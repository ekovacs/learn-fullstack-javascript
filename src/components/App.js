import React from 'react';
import Header from './Header';

import ContestList from './ContestList';

const pushState = (obj, url) => {
  window.history.pushState(obj, '', url);
};

class App extends React.Component  {

  state = { 
    pageHeader: 'Naming contest',
    contests: this.props.initialContests
  }
    
   

  componentDidMount() {
        // called when the DOM is loaded
        // any 3rd party integrations, ajax calls, timers / listeners should be setup here
  }

  componentWillUnmount() {
        // clean up anything that may leak: timers, listeners, etc...
  }


  fetchContests = (contestId) => {
    pushState({currentContestId: contestId}, `/contest/${contestId}`);
  }

  render() {
    return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <ContestList 
                onContestClick={this.fetchContests}
                contests={this.state.contests} />
            </div>
    );
  }

    
}

App.propTypes = {
  initialContests: React.PropTypes.array
};

export default App;