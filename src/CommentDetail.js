import React from "react";

const CommentDetail = (props) => {
  // console.log(props); // props er result object a asbe
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.profile} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
          {/* props object Call */}
        </a>
        <div className="matadata">
          <span className="data">{props.timeAgo}</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
