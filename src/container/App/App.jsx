import React from "react";
import "./App.css";
import Button from "../../components/Button";
import { firestore } from "../../firebase";
import Post from "../../components/Post";

class App extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    firestore
      .collection("posts")
      .get()
      .then(querySnapshot => {
        const posts = querySnapshot.docs.map(doc => {
          return { ...doc.data(), docId: doc.id };
        });
        console.log(posts);
        this.setState({
          posts: posts
        });
      });
  }
  render() {
    return (
      <main className="App">
        <Button name="all" filter="none" />
        <Button name="red" filter="red" />
        <Button name="green" filter="green" />
        <Button name="blue" filter="blue" />
        <section>
          {this.state.posts.map((post, index) => (
            <Post postData={post} key={index} />
          ))}
        </section>
      </main>
    );
  }
}

export default App;
