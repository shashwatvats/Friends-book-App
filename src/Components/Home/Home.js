import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Home(props) {
  const [users, setusers] = useState([]);
  useEffect(() => {
    let api_key = "6087c41b8949a61951b13731";
    fetch(" https://dummyapi.io/data/api/user?limit=20", {
      method: "GET",
      headers: {
        "app-id": "6087d9595d6ecb35749abb3c",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setusers(data.data);
      });
  });
  function viewProfile(id) {
    props.userId(id);
  }
  function addFriend(id, fname, lname, email, phone, url) {
    props.addfriend(id, fname, lname, email, phone, url);
  }
  return (
    <div className="container ms-5 mt-3 row text-center">
      {users.map((item) => (
        <div
          class="card me-5 mb-3"
          style={{ width: "18rem", boxShadow: "0 0 5px 2px" }}
        >
          <img
            src={item.picture}
            class="card-img-top"
            alt="..."
            height="200px"
          />
          <div class="card-body">
            <h5 class="card-title">
              {item.title} {item.firstName} {item.lastName}
            </h5>
            <p class="card-text">{item.email}</p>
            <Link
              to="/profile"
              className="btn btn-info"
              onClick={viewProfile.bind(this, item.id)}
            >
              See Profile
            </Link>
            <Link
              to="/addfriend"
              className="btn btn-warning"
              onClick={addFriend.bind(
                this,
                item.id,
                item.firstName,
                item.lastName,
                item.email,
                item.phone,
                item.url
              )}
            >
              Add Friend
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
