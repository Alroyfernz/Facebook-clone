import React from "react";
import Post from "../post/Post";
import Suggestion from "../suggestions/Suggestion";
import "./feed.scss";
const Feed = () => {
  return (
    <section className="feed">
      <div className="feed_wrapper">
        <div className="feed_left">
          <div className="feed_stories"></div>
          {/* <div className="feed_posts"> */}
          <Post />
          <Post />
          <Post />
          {/* </div> */}
        </div>
        <div className="feed_right">
          <div className="feed_right_top">
            <div className="feed_right_top_left">
              <img src="images/pp1.png" className="feed_right_img" alt="" />
            </div>
            <div className="feed_right_top_center">
              <span style={{ color: "#262626" }}>Alroyfernz</span>
              <span style={{ color: "#8e8e8e" }}>username</span>
            </div>

            <span className="rightSide">Log out</span>
          </div>
          <div className="feed_right_middle">
            <span className="feed_middle_text1">suggestions for you</span>
            <span className="feed_middle_text2">see more</span>
          </div>
          <div className="feed_right_bottom">
            <Suggestion />
            <Suggestion />
            <Suggestion />
          </div>
          <div className="feed_right_footer">
            <nav className="footerTop">
              <ul className="footerItem">
                <li className="footerItems">About</li>
                <li className="footerItems">Api</li>
                <li className="footerItems">Help</li>
                <li className="footerItems">Home</li>
                <li className="footerItems">Privacy</li>
                <li className="footerItems">Locations</li>
                <li className="footerItems">Data</li>
                <li className="footerItems">Mern stack</li>
              </ul>
            </nav>
            <span className="footerBottom">© 2021 INSTAGRAM FROM ALROY</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feed;
