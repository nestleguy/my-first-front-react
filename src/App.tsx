import React from 'react';
import Home from "./components/home component";
import './App.css';
import {Route,Routes} from "react-router-dom"
import LoginPage from './components/auth/login';
import PrivateRoute from './utilits/router/privateRoute';
import Appl from './components/home component/grafics';


function App() {
  return (
    <div className="app">
<Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home/>}/>
        <Route path='/grapfics' element={<Appl/>}/>
      </Route>
        
      <Route path="/login" element={<LoginPage/>}/>
</Routes>
    </div>
  );
}

export default App;
