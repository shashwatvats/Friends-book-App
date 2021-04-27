import Header from "./Components/Header/Header";
import React, { useState } from "react";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import FriendList from "./Components/FriendList/FriendList";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
function App() {
  const [userId, setuserId] = useState("");
  function setid(id) {
    setuserId(id);
  }
  function setfriend(id, fname, lname, email, phone, url) {
    fetch("http://localhost:3002/friends", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url,
        id: id,
        fname: fname,
        lname: lname,
        email: email,
      }),
    });
  }
  return (
    <div>
      <Router>
        <Header />
        <Route exact path="/" component={() => <Login />} />
        <Route exact path="/home" component={() => <Home userId={setid} />} />
        <Route exact path="/friendlist" component={<FriendList />} />
        <Route
          exact
          path="/profile"
          component={() => <Profile userId={userId} />}
        />
        <Route
          exact
          path="/addfriend"
          component={() => <Profile addfriend={setfriend} />}
        />
      </Router>
    </div>
  );
}

export default App;
