import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  };

  render() {
    return (
      <div className="App" >
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map((contest) => {
            return <ContestPreview key={contest.id} {...contest} />;
          })}
        </div>
      </div>
    );
  }
}
 
export default App;