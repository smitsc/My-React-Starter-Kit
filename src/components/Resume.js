import React, { Component } from 'react';
import data from '../data/data.json';

export default class App extends Component {
  render() {
    return (
        <ul>
        {
          data.map(function(data){
            return <li>{data.id} - {data.title}</li>;
          })
        }
        </ul>
    );
  }
}
