import React from "react";
import ProfileContainer from "./ProfileContainer";
import GetItSold from "./GetItSold";
import "./ProfileAndSold.css";

function ProfileAndSold() {
  return (
    <div className="profile_and_sold_layout" id="about">
      <ProfileContainer />
      <GetItSold />
    </div>
  );
}

export default ProfileAndSold;
