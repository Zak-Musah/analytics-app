import React from "react";
import { useSelector } from "react-redux";

const Post = () => {
  const user = useSelector((state) => state.authReducer.user);
  console.log(user);
  return (
    <div>
      <h2>Post Screen</h2>
      <p>Welcome: {user.firstName}</p>
    </div>
  );
};

export default Post;
