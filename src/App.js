import React from 'react';
import './App.css';
import  Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        
      < Route path="/about" component={About} />
      <Route path="/shop" component={Shop} />
      </Switch>
       </div>
    </Router>
  );
}

export default App;
