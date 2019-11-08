import React from "react";
import "./App.css";
import Button from "../../components/Button";
import { firestore } from "../../firebase";
import Post from "../../components/Post";

class App extends React.Component {
  state = {
    posts: [],
    filteredPosts: [],
    postColor: "",
    colors: []
  };

  componentDidMount() {
    firestore
      .collection("posts")
      .get()
      .then(querySnapshot => {
        const posts = querySnapshot.docs.map(doc => {
          return { ...doc.data(), docId: doc.id };
        });
        console.log(posts[0].filter);
        this.setState({
          posts: posts,
          filteredPosts: posts,
          colors: [
            ...new Set(
              posts.map(color => {
                return color.filter;
              })
            )
          ]
        });
      });
  }

  updatePosts = color => {
    const filteredPosts = this.state.posts.filter(
      post =>
        post.filter === color.target.innerHTML ||
        "none" === color.target.innerHTML
    );
    this.setState({
      postColor: color.target.innerHTML,
      filteredPosts: filteredPosts
    });
  };

  render() {
    return (
      <main className="App">
        <Button updatePosts={this.updatePosts} name="none" />
        {this.state.colors.map((color, index) => (
          <Button updatePosts={this.updatePosts} name={color} key={index} />
        ))}
        <section>
          {this.state.filteredPosts.map((post, index) => (
            <Post postData={post} key={index} />
          ))}
        </section>
      </main>
    );
  }
}

export default App;
