import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Provider from './context/Provider';
import Home from './pages/Home';
import Admin from './pages/Admin';

function App() {
  return (
    <Switch>
      <Provider>
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/' component={Home} />
      </Provider>
    </Switch>
  );
}

export default App;