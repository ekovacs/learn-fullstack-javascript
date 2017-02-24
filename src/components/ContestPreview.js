import React from 'react';



class ContestPreview extends React.Component {

  handleClick = () => {
    this.props.onClick(this.props.id);
  };

  render() {
    return (
        <div className="link ContestPreview" onClick={this.handleClick}> 
            <div className="category-name">{this.props.categoryName}</div>
            <div className="contest-name">{this.props.contestName}</div>
        </div>
    );
  }

}

// Prop validations
ContestPreview.propTypes = {
  categoryName: React.PropTypes.string.isRequired,
  contestName: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  id: React.PropTypes.number.isRequired
};

export default ContestPreview;

