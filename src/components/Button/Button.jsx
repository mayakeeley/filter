import React, { Component } from "react";
import styles from "./Button.module.css";

class Button extends Component {
  render() {
    let style = {
      backgroundColor: this.props.name,
      color: this.props.name,
      borderRadius: "50%",
      height: "50px",
      width: "50px",
      border: "none"
    };
    return (
      <button
        onClick={this.props.updatePosts}
        className={styles[this.props.name]}
        style={style}
      >
        {this.props.name}
      </button>
    );
  }
}

export default Button;
