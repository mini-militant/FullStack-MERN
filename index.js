import React, { Component } from 'react';
import { render } from 'react-dom';
import {store} from './Client/Store'
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
       {console.log('hi')}
       {console.log(store.getState())
       } 
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
