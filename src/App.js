import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/footer'
import Dashboard from './components/dashboard';
import Login from './components/login';
import Signup from './components/signup';
import ProtectedRoute from './components/protectedRoute'

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <ProtectedRoute path="/" component={Dashboard} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
