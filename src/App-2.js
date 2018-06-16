import React, { Component } from "react";
import New from './components/New';
import './styles/App.css';

export default class App extends Component {
  render() {
    return (
		<div>
		  <h1>Hello new</h1>
		  <New />
		</div>
		);
  }
}
