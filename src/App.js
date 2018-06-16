import React, { Component } from "react";
import { Header, Container } from 'semantic-ui-react';
import './styles/App.css';

export default class App extends Component {
    render() {
        return (
      <div className="App">
		<div className="App-header">
			<Header inverted as="h1" color='blue'>Project React App</Header>
		</div>
		   <Container>
			   /* main body data */
		   </Container>		
      </div>
        );
    }
}