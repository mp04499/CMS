import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Template from './Template';
import Home from '../routes/Home';
import Signup from "../routes/Signup";
import Me from '../routes/Me';

class App extends Component {

  render() {
    return (
      <Switch>
        <Template>
          <Route path={'/home'} component={Home} />
          <Route exact path={'/'} component={Home}/>
          <Route path={'/signup'} component={Signup} />
          <Route path={'/me'} component={Me} />
        </Template>
      </Switch>
    );
  }
}

export default App;
