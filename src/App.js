import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Home from './components/Home.js'
import About from './components/About.js'
import Projects from './components/Projects.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Projects" component={Projects}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
