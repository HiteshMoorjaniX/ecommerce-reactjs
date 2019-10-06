import React from 'react';
import Header from './components/header'
import Footer from './components/footerComponent'
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
