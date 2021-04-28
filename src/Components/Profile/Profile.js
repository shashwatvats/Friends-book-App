import React, { useEffect, useState } from "react";

function Profile(props) {
  const [profile, setprofile] = useState("");
  useEffect(() => {
    fetch(`https://dummyapi.io/data/api/user/${props.userId}`, {
      method: "GET",
      headers: {
        "app-id": "6087c41b8949a61951b13731",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setprofile(data);
      });
  }, []);
  return (
    <div>
      <div class="card col-md-5 mx-auto text-center">
        <img
          src={profile.picture}
          class="card-img-top ms-auto me-auto"
          alt="..."
          style={{ height: "300px", width: "500px" }}
        />
        <div class="card-body">
          <h5 class="card-title">
            {profile.title} {profile.firstName} {profile.lastName}
          </h5>
          <p class="card-text">Gender : {profile.gender}</p>
          <p class="card-text">Email : {profile.email}</p>
          <p class="card-text">DOB : {profile.dateOfBirth}</p>
          <p class="card-text">Phone : {profile.phone}</p>
          <p class="card-text">Register Date : {profile.registerDate}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
