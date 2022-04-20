import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import './Header.css';
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login.js";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";


function App() {
  const[{user}, dispatch]= useStateValue();

//useEffect
//peice of code which runs based on a given conditiona

useEffect(() => {
  auth.onAuthStateChanged((authUser) =>{
    if (authUser) {

      dispatch({
        type: "SET_USER",
        user: authUser,
      })

    }else{
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  });
  
}, []);


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
          <Header/>
            <Checkout />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
          <Header/>
           <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
