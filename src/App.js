import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import React, { Component } from 'react';
import Footer from './Footer';
import Home from './home';
import SignUp from './SignUp';
import Login from './login';
import CRegister from './cregister';

class MyComponent extends Component {
  render() {
    return (

      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Login" component={Login} />
            <Route path="/cregister" component={CRegister} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default MyComponent;
