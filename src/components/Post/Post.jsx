import React, { Component } from "react";
// import styles from "./Post.module.css";

class Post extends Component {
  render() {
    return (
      <article>
        <p>{this.props.postData.post}</p>
      </article>
    );
  }
}

export default Post;
