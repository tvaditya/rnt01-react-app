import React from 'react';
import './App.css';
import {BrowserRouter, Route } from 'react-router-dom';
import Users from './pages/Users';
import Login from './pages/Login';
import Register from './pages/Register';
import Links from './pages/Links';
import {RedirectUsers} from "./components/RedirectToUsers";
import Products from "./pages/products/Products";
import ProductForm from "./pages/products/ProductForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route path={'/'} exact component={RedirectUsers}/>
          <Route path={'/login'} component={Login}/>
          <Route path={'/register'} component={Register}/>
          <Route path={'/users'} exact component={Users}/>
          <Route path={'/users/:id/links'} component={Links}/>
          <Route path={'/products'} exact component={Products}/>
          <Route path={'/products/create'} component={ProductForm}/>
          <Route path={'/products/:id/edit'} component={ProductForm}/>
      </BrowserRouter>
    </div>
  )
}

export default App;
