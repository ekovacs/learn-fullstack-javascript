import React from 'react';



class ContestPreview extends React.Component {

  handleClick = () => {
    console.log(this.props.contestName);
  };

  render() {
    return (
        <div className="ContestPreview" onClick={this.handleClick}> 
            <div className="category-name">{this.props.categoryName}</div>
            <div className="contest-name">{this.props.contestName}</div>
        </div>
    );
  }

}

// Prop validations
ContestPreview.propTypes = {
  categoryName: React.PropTypes.string.isRequired,
  contestName: React.PropTypes.string.isRequired
};

export default ContestPreview;

