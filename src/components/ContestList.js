import React from 'react';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestClick }) => (
  <div className="ContestList">
    {contests.map(contest => 
        <ContestPreview 
          onClick={onContestClick}
          key={contest.id} {...contest} />
    )}
  </div>
);


ContestList.propTypes = {
  contests: React.PropTypes.array,
  onContestClick: React.PropTypes.func.isRequired
};

export default ContestList;