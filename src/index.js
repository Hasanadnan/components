import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// const img = faker.image.image();

const App = () => {
  return (
    <div className="ui conatiner comments">
      <ApprovalCard>
        <CommentDetail
          author="Hasan"
          timeAgo="Today at 4:00PM"
          comment="nice Pic"
          profile={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Rahim"
          timeAgo="Today at 12:40AM"
          comment="Excelent"
          profile={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Karim"
          timeAgo="Yesterday at 11:45PM"
          comment="You are So beutiful"
          profile={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jodhu"
          timeAgo="7 Days Ago"
          comment="Ok that is Nice"
          profile={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
