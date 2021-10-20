import React from 'react';
import FormContainer from "./components/FormContainer";
import './styles/index.scss'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Auth from "./components/Auth";

const App = () => {

  return (
    <Router className="App">
      <Switch>
        <Route exact path="/" component={FormContainer}/>
        <Route exact path="/docteur" component={Auth}/>
      </Switch>
    </Router>
  );
}

export default App;
