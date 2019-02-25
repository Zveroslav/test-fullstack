import React, { Component } from 'react';
import './App.css';
import {Routing} from "./Components/Router";
import {Provider} from 'react-redux'
import {storeFactory} from "./store";

const store = storeFactory();

window.store = store;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Routing />
        </Provider>
      </div>
    );
  }
}

export default App;
