import React from 'react';
import FormContainer from "./components/FormContainer";
import './styles/index.scss'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Auth from "./components/Auth";
import Welcome from "./components/Welcome";

const App = () => {

  return (
    <Router className="App">
      <Switch>
        <Route exact path="/" component={FormContainer}/>
        <Route exact path="/docteur" component={Auth}/>
        <Route exact path="/welcome" component={Welcome}/>
      </Switch>
    </Router>
  );
}

export default App;
