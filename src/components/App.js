import React from 'react';
import Header from './Header';
import Content from './Content';

class App extends React.Component  {

    state = { 
        pageHeader: 'Naming contest'
    };
    

    
    render () {
        return (
            <div className="App">
               <Header message={this.state.pageHeader} />
               <Content />
            </div>
        );
    };

    
};

export default App;