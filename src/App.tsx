import React from 'react';
import Home from "./components/home component";
import {Route,Routes} from "react-router-dom"
import PrivateRoute from './utilits/router/privateRoute';
import Appl from './components/home component/grafics';
import AuthRootComponent from './components/auth';

function App() {
  return (
    <div className="app">
<Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home/>}/>
        <Route path='/grapfics' element={<Appl/>}/>
      </Route>
        
      <Route path="/login" element={<AuthRootComponent/>}/>
      <Route path="/registration" element={<AuthRootComponent/>}/>
</Routes>
    </div>
  );
}

export default App;
