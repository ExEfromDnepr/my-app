import React, { Component } from 'react';
import './App.css';
import TestComponent from './TestComponent';
import TestComponent_2 from './Page1';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ElementTick from './Page2';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Link to="/">Home</Link>
      <Link to="/page1">Page 1</Link>
      <Link to="/page2">Page 2</Link>
    
        <Route exact path="/" component={ TestComponent }/>
        <Route exact path="/page1" component={TestComponent_2}/>
        <Route exact path="/page2" component={ElementTick}/>
      </div>
    </Router>
    );
  }

}

export default App;
