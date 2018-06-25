import React, {Component} from 'react';
import { Card, Image } from 'semantic-ui-react'

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.renderCards = this.renderCards.bind(this);
  }

  renderCards(cardVals) {
    return cardVals.map((card, index) => {
      return (
        <div key={index} className="Card">
            <Card>
				<Image src='./src/images/balloon.jpg' className="card-img-top"/>
			</Card>
        </div>
      );
    });
  }

  render() {
    var cards = [2, 4, 1, 5, 3, 4, 2, 3, 5, 1];
    return (
      <div className="Game">
        {this.renderCards(cards)}
      </div>
    );
  }
}