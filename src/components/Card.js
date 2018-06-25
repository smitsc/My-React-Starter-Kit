import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCardFlip from './ReactCardFlip';
import img0 from '../images/balloon.jpg';

class Card extends Component  {
  constructor() {
    super();
    this.state = { isFlipped: false };
	this.handleFlip = this.handleFlip.bind(this);
  }

  handleFlip(event) {
		event.preventDefault();
		this.setState(prevState => ({ isFlipped: !prevState.isFlipped })); 
	}

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <div key="front" style={this.props.styles.card} onClick={this.handleFlip}>
          <img
            style={this.props.styles.image}
            src={img0}
			onClick={() => this.props.onClick()}
          />
        </div>

        <div key="back" style={this.props.styles.card} onClick={this.handleFlip}>
          <img
            style={this.props.styles.image}
            src={this.props.imgname}
			onClick={() => this.props.onClick()}			
          />
        </div>
      </ReactCardFlip>
    );
  }
};

Card.propTypes = { styles: PropTypes.object };

export default Card;