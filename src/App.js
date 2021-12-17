import React from "react";
import {Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Profile from "./components/Profile/Profile";




const App = (props) => {
  return (
    <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
            <Route path="/dialogs" render={ () => <DialogsContainer store={props.store}/>} />
            <Route path='/profile' render={ () => <Profile store={props.store}/>} />
            <Route path='/users' render={ () => <UsersContainer store={props.store} />} />
        </div>
    </div>
  )
}

export default App;
