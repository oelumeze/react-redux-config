import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import configureStore from './redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };

     
  }

  
  render() {
    const store = configureStore();
    return (
      <ReduxProvider store={store}>
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
      </ReduxProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
