import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { Nav, NavLink, NavMenu } from "./NavbarElements";

//Pages
import Layout from './pages/Layout';
import Home from './pages/Home';
import Cookbook from './pages/Cookbook';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Layout />}>
            <Route index element = {<Home />} />
            <Route path = "Cookbook" element = {<Cookbook />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
