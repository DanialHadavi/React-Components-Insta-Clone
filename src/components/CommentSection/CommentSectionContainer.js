// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "../../../src/dummy-data.js";

const CommentSection = () => {
  // Add state for the comments
  const [comments1] = useState(dummyData);

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments1.map(c => (
        <Comment props={c} />
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
