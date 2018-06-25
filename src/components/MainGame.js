import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Grid, Row, Col } from 'react-bootstrap'
import Shuffle from 'shuffle-array';
import Card from './Card';
import img1 from '../images/balloon1.jpg';
import img2 from '../images/balloon2.jpg';
import img3 from '../images/balloon3.jpg';
import img4 from '../images/balloon4.jpg';
import img5 from '../images/balloon5.jpg';
import img6 from '../images/balloon6.jpg';
import img7 from '../images/balloon7.jpg';
import img8 from '../images/balloon8.jpg';
import img9 from '../images/balloon9.jpg';
import img10 from '../images/balloon10.jpg';
const styles = {
	card: {
		border: '1px solid #eeeeee',
		borderRadius: '3px',
		padding: '5px',
		width: '100px',
		Height: '100px'
	},
	image: {
		height: '100%',
		width: '100%'
	}
};

let images = Shuffle([img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img1,img2,img3,img4,img5,img6,img7,img8,img9,img10]);
let chkFlip = [2];

export default class MyGame extends React.Component {
	  constructor(props) {
		super(props);
		this.state = {
		  cards: Array(20).fill(null),
		  isGuess: false
		};
	  }
	handleClick(iname) {
		chkFlip[this.state.isGuess] = iname;
		if (this.state.isGuess) {
			if (chkFlip[this.state.isGuess] === chkFlip[!this.state.isGuess]) {
				console.log(iname + " Winner ");
			} else {
				/* turn them back around */
			}
			chkFlip = [];
		}  
		this.setState({
			isGuess: !this.state.isGuess
		})
		console.log(this.state.isGuess + "-" + chkFlip[this.state.isGuess] + "\n");
		console.log(!this.state.isGuess + "-" + chkFlip[!this.state.isGuess]);
	}
	render(){
		return (
			<Grid>
				{ images.map((imageNbr, idx) => {
					this.state.cards[idx]=imageNbr;
					return (
					  <Col sm={6} md={3}>
						<Card key={idx} styles={styles} imgname={this.state.cards[idx]} onClick={() => this.handleClick(imageNbr)} />
					  </Col>				
					);
				})}
			</Grid>
		);
	}
};