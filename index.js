import React, { Component } from 'react';
import ReactDOM,{ render } from 'react-dom';
import {store} from './Client/Store'
import Dashboard from './Client/Components/Dashboard'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React' 
    };
    
  }

  render() {
    return (
      <div>
       <Dashboard/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
