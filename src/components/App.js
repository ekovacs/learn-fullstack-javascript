import React, { Component } from 'react';
import Header from './Header';

import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';


const pushState = (obj, url) => {
  window.history.pushState(obj, '', url);
};

class App extends Component  {

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

    api.fetchContest(contestId)
    .then(contest => {
      this.setState({
        pageHeader: contest.contestName,
        currentContestId: contest.id, // putting currentContestId on App state

        // this improves performance: 
        //keeping previous models on state (by spreading them)
        // but overwriting the one that is at contest.id, using the Computed property name sytax
        contests: {
          ...this.state.contests,
          [contest.id]: contest
        }
      });
    })
    .catch(console.log);
    
  }

  currentContent() {
    if (this.state.currentContestId) {
      return <Contest {... this.state.contests[this.state.currentContestId]} />;
    } else {
      return (<ContestList 
                    onContestClick={this.fetchContests}
                contests={this.state.contests} />);
    }
  }


  render() {
    return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                {this.currentContent()}
            </div>
    );
  }

    
}

App.propTypes = {
  initialContests: React.PropTypes.object
};

export default App;