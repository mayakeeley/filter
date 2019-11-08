import React from "react";
import Post from "./Post";

export default {
  title: "Post"
};

let data = {
  post: "blah",
  filter: "red"
};

export const post = () => <Post postData={data} />;
