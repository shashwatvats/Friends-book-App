import React, { useEffect, useState } from "react";

function Profile(props) {
  console.log(props.userId);
  const [profile, setprofile] = useState("");
  useEffect(() => {
    fetch(`https://dummyapi.io/data/api/user/${props.userId}`, {
      method: "GET",
      headers: {
        "app-id": "6087d9595d6ecb35749abb3c",
      },
    })
      .then((res) => res.json())
      .then((data) => setprofile(data));
  });
  return (
    <div>
      <div class="card col-md-6">
        <img
          src={profile.picture}
          class="card-img-top"
          alt="..."
          height="300px"
          width="300px"
        />
        <div class="card-body">
          <h5 class="card-title">
            {profile.firstName} {profile.lastName}
          </h5>
          <p class="card-text">Gender : {profile.gender}</p>
          <p class="card-text">Email : {profile.email}</p>
          <p class="card-text">DOB : {profile.dateOfBirth}</p>
          <p class="card-text">Phone : {profile.phone}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
