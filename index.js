import React, { Component } from 'react';
import ReactDOM,{ render } from 'react-dom';
import {store} from './Client/Store'
import {ConnectedDashBoard} from './Client/Components/DashBoard'
import {Provider} from 'react-redux'
import {Router,Route} from 'react-router-dom'
import {history} from './Client/Store/history'
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
      
       <Router history={history}>
       <div>
       <Provider store={store}>
        <div>
          {/*<ConnectedDashBoard/>*/}
          <Route exact path = "/dashboard" render ={()=>(<ConnectedDashBoard/>)}/>

        </div>
       </Provider>
      </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
