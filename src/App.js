import "./App.css";
import "./components/navbar.css";
import React, { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import AllData from "./public/alldata";
import CreateAccount from "./components/createaccount";
import Deposit from "./components/deposit";
import Home from "./components/home";
import Login from "./components/login";
import NavBar from "./components/navbar";
import Withdraw from "./components/withdraw";import './App.css';
import UserStatus from './components/UserStatus';

function App() {
  const [user, setUser] = React.useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <Navbar user={user} onLogout={handleLogout} />
      {user ? (
        <UserStatus user={user} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}