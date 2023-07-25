import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Provider from './context/Provider';
import Admin from './pages/admin/Admin';
import Home from './pages/home/Home';
import GetCategory from './pages/getCategory/GetCategory';
import PostCategory from './pages/postCategory/PostCategory';

function App() {
  return (
    <Switch>
      <Provider>
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/admin/getcategory' component={GetCategory} />
        <Route exact path='/admin/postcategory' component={PostCategory} />
        <Route exact path='/' component={Home} />
      </Provider>
    </Switch>
  );
}

export default App;