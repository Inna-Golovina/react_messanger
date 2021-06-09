import React, {useContext} from 'react';
import {BrowserRouter} from 'react-router-dom'
//import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import './App.css'
import Navbar from './components/Navbar';
//import {Context} from "./index";
//import {useAuthState} from "react-firebase-hooks/auth";
//import Loader from "./components/Loader";

const App = () => {

    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <AppRouter />
        </div>
      </BrowserRouter>
    );
};

export default App;
