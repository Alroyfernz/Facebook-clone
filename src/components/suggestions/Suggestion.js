import React from "react";
import "./suggestion.scss";
const Suggestion = () => {
  return (
    <div className="suggestion">
      <div className="suggestion_wrapper">
        <div className="userImg">
          <img src="images/pp2.png" className="userImage" alt="" />
        </div>
        <div className="userTitle">
          <span>Username</span>
          <span style={{ color: "#8e8e8e" }}>name</span>
        </div>
        <span className="userFollow">Follow</span>
      </div>
    </div>
  );
};

export default Suggestion;
