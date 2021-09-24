import React from "react";

import Navbar from "../components/navbar/Navbar";
import Post from "../components/post/Post";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="profile_Wrapper">
          <div className="userData">
            <div className="dataLeft">
              <img src="" alt="" />
            </div>
            <div className="dataRight">
              <div className="userTitle"></div>
              <div className="userStats"></div>
              <div className="userBio"></div>
            </div>
          </div>
          <hr />
          <div className="userPosts"></div>
          <div className="mainFooter"></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
