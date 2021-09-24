import React from "react";
import Post from "../post/Post";
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
          dignissimos! Minima fugiat eos eveniet quae sunt natus possimus
          repudiandae assumenda nulla. Iusto voluptatibus, consequuntur
          laboriosam soluta maxime at dolore voluptates natus incidunt pariatur
          eos cum, eaque delectus, fuga provident odit ab a! Expedita illum quas
          libero tenetur eveniet a ut.
        </div>
      </div>
    </section>
  );
};

export default Feed;
