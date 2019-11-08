import React, { Component } from "react";
import styles from "./Post.module.css";

class Post extends Component {
  render() {
    let style = {
      border: `4px solid ${this.props.postData.filter}`,
      borderRadius: "15px"
    };
    return (
      <article className={styles[this.props.postData.filter]} style={style}>
        <p>{this.props.postData.post}</p>
      </article>
    );
  }
}

export default Post;
