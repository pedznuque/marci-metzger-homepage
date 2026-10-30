import React from "react";
import { IoMdCall } from "react-icons/io";
import profilePhoto from "../assets/refine-profile.png";
import "./ProfileContainer.css";

function ProfileContainer() {
  return (
    <section className="profile_container" aria-labelledby="profile-name">
      <div className="profile_card">
        <div className="profile_portrait_area">
          <img className="profile_avatar" src={profilePhoto} alt="Marci Metzger" />
        </div>
        <div className="profile_details">
          <p className="profile_eyebrow">MEET YOUR REALTOR</p>
          <h2 id="profile-name">Marci Metzger</h2>
          <p className="profile_role">Realtor for nearly 3 decades</p>
          <a className="profile_phone" href="tel:+12069196886">
            <IoMdCall aria-hidden="true" />
            <span>Call Marci: 206-919-6886</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProfileContainer;
