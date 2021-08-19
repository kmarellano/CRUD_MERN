import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Add from './components/Add'
import Body from './components/Body';

function App() {
    return ( 
      <Router>
        <div className = "container">
            <Switch>
              <Route path="/" exact component={Body} />
              <Route path="/addItem" exact component={Add} />
            </Switch>
        </div>
      </Router>
    );
}

export default App;