import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { VscComment } from "react-icons/vsc";
import "./post.scss";
const Post = () => {
  return (
    <div className="post">
      <div className="post_header">
        <div className="post_header_left">
          <img src="images/pp1.png" alt="user" className="header_image" />
          <span>Alroyfernz</span>
        </div>
        <div className="post_header_right">
          <BsThreeDots />
        </div>
      </div>
      <img src="images/post.jpg" alt="img" className="post_image" />
      <div className="post_function">
        <div className="post_functions">
          <img src="images/love.svg" alt="like" className="post_func" />
          <img src="images/comment.svg" alt="like" className="post_func" />
          <img src="images/share.svg" alt="like" className="post_func" />
        </div>
        <img src="images/save.svg" alt="" className="post_func2" />
      </div>
      <span className="post_likes">20 likes</span>
      <div className="post_desc">
        <p className="post_desc_data">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
          aperiam laudantium neque? Placeat, culpa exercitationem! Ipsum ea
          dolorum minima praesentium commodi voluptatibus autem id iste
          exercitationem provident nihil inventore tenetur officia, aut animi!
        </p>
      </div>
      <div className="post_comment">
        <VscComment className="post_comment_icon" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="post_comment_data"
        />
        <span className="post_comment_submit">Post</span>
      </div>
    </div>
  );
};

export default Post;
