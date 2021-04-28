import React, { useEffect, useState } from "react";
function FriendList() {
  const [friends, setfriends] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/friends")
      .then((res) => res.json())
      .then((data) => {
        setfriends(data);
      });
  }, []);
  return (
    <div className="container text-center mt-3 ">
      {friends.map((item) => (
        <div className="card col-md-4 ms-auto me-auto mb-2">
          <h4>
            <i class="fas fa-arrow-right float-start"></i>
            {item.fname} {item.lname}
          </h4>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
}

export default FriendList;
