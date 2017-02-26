import React, { Component } from 'react';
import Header from './Header';

import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';


const pushState = (obj, url) => {
  window.history.pushState(obj, '', url);
};

const onPopState = handler => {
  window.onpopstate = handler;
};

class App extends Component  {

  static propTypes = {
    initialData: React.PropTypes.object.isRequired
  }

  state = this.props.initialData;

  componentDidMount() {
    onPopState((event) => {
      this.setState({
        currentContestId: (event.state || {}).currentContestId
      });
    });
        // called when the DOM is loaded
        // any 3rd party integrations, ajax calls, timers / listeners should be setup here
  }

  componentWillUnmount() {
        // clean up anything that may leak: timers, listeners, etc...
    onPopState(null);
  }


  fetchContest = (contestId) => {
    pushState({currentContestId: contestId}, `/contest/${contestId}`);

    api.fetchContest(contestId)
    .then(contest => {
      this.setState({
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

  fetchContestList = () => {
    pushState(
      { currentContestId: null }, 
      '/'
    );
    api.fetchContestList().then(contests => {
      this.setState({
        currentContestId: null,
        contests: contests
      });
    });
  }

  currentContest() {
    return this.state.contests[this.state.currentContestId];
  }

  pageHeader() {
    if (this.state.currentContestId) {
      return this.currentContest().contestName;
    } 

    return 'Naming contest';
    
  }

  currentContent() {
    if (this.state.currentContestId) {
      return <Contest 
                contestListClick={this.fetchContestList} {... this.currentContest()} 
              />;
    } else {
      return (<ContestList 
                    onContestClick={this.fetchContest}
                contests={this.state.contests} />);
    }
  }

  render() {
    return (
            <div className="App">
                <Header message={this.pageHeader()} />
                {this.currentContent()}
            </div>
    );
  }

    
}

App.propTypes = {
  initialContests: React.PropTypes.object
};

export default App;