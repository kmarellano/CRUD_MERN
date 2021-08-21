import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Add from './components/Add'
import Edit from './components/Edit'
import Body from './components/Body';

function App() {
    return ( 
      <Router>
        <div className = "container">
            <Switch>
              <Route path="/" exact component={Body} />
              <Route path="/addItem" exact component={Add} />
              <Route path="/editItem/:id" exact component={Edit} />
            </Switch>
        </div>
      </Router>
    );
}

export default App;