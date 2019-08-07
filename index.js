import React, { Component } from 'react';
import ReactDOM,{ render } from 'react-dom';
import {store} from './Client/Store'
import {ConnectedDashBoard} from './Client/Components/DashBoard'
import {ConnectedTasklist} from './Client/Components/Tasklist'
import {Provider} from 'react-redux'

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
       
       <Provider store={store}>
        <div>
          <ConnectedDashBoard/>
          <ConnectedTasklist/>
        </div>
       </Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
