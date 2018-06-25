import React, { Component } from "react";
import '../styles/main.scss';

// React component for the front side of the card
class CardShow extends Component {
  render() {
    return(
      <div className='card-side side-front'>
        <div className='container-fluid'>
			<img src={ this.props.name } />
        </div>
      </div>
    )
  }
}

// React component for the back side of the card
class CardBack extends Component {
  render() {
    return(
      <div className='card-side side-back'>
        <div className='container-fluid'>
			<img src={ this.props.name } />
        </div>
      </div>
    )
  }
}

// React component for the card (main component)
export default class Card extends Component {
	  constructor () {
		super()
	    this.state = {
		  isFlipped: false,
		  rotation: 0
		};
		this.handleClick = this.handleClick.bind(this);
	  }
	
	handleClick(e) {
		e.preventDefault();
		this.setState({isFlipped: !this.state.isFlipped});
		console.log(this.state.isFlipped);		
	}
	
  render() {	  
    return(
      <div className='card-container' >
        <div className='card-body' onClick={this.handleClick} >
          <CardShow name="src/images/balloon.jpg" />
          <CardBack name="src/images/balloon3.jpg" />		  
        </div>
      </div>
    )
  }
}