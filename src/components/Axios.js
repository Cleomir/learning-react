import { Component } from "react";
import axios from "axios";

export default class Axios extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res);
      this.setState({ posts: res.data.slice(0, 10) });
    });
  }

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div key={post.id}>
            <span>{post.title}</span>
            <p>{post.body}</p>
          </div>
        );
      })
    ) : (
      <div>No posts yet</div>
    );
    return postList;
  }
}
