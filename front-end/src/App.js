import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Pages/Login';
import './App.css';
import Register from './Pages/Register';
import Customer from './Pages/Customer';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={ () => <Redirect to="/login" /> } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route path="/customer/products" component={ Customer } />
    </Switch>
  );
}

export default App;
