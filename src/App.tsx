import React from 'react';
import './App.css';
import {BrowserRouter, Route } from 'react-router-dom';
import Users from './pages/Users';
import Login from './pages/Login';
import Register from './pages/Register';
import {RedirectUsers} from "./components/RedirectToUsers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={'/'} exact component={RedirectUsers} />
        <Route path={'/'} component={Users}/>
        <Route path={'/login'} component={Login}/>
        <Route path={'/register'} component={Register}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
