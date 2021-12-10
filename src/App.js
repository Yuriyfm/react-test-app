import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';

import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
  return (
  <BrowserRouter>
    <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
            <Route path="/dialogs" component={Dialogs}/>
            <Route path='/profile' component={Profile}/>
        </div>
    </div>
  </BrowserRouter>
  )
}

export default App;
