import Header from "./Components/Header/Header";
import React, { useState } from "react";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import FriendList from "./Components/FriendList/FriendList";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import authentication from "./service/auth";
function App() {
  const [userId, setuserId] = useState("");
  const [open, setOpen] = React.useState(false);
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
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
        phone: phone,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setOpen(true);
      });
  }
  function check() {
    authentication.Login();
    return authentication.isLoggedin;
  }
  return (
    <div>
      <Router>
        <Header />
        <Route exact path="/" component={() => <Login />} />
        <Route
          exact
          path="/home"
          component={() =>
            check() ? (
              <Home addfriend={setfriend} userId={setid} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          exact
          path="/friendlist"
          component={() => (check() ? <FriendList /> : <Redirect to="/" />)}
        />
        <Route
          exact
          path="/profile"
          component={() =>
            check() ? <Profile userId={userId} /> : <Redirect to="/" />
          }
        />
      </Router>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Friend Added Succesfully!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
