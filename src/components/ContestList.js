import React from 'react';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestClick }) => (
  <div className="ContestList">
    {Object.keys(contests).map(contestId => 
        <ContestPreview 
          onClick={onContestClick}
          key={contestId} {...contests[contestId]} />
    )}
  </div>
);


ContestList.propTypes = {
  contests: React.PropTypes.object,
  onContestClick: React.PropTypes.func.isRequired
};

export default ContestList;