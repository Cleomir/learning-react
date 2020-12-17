import { connect } from "react-redux";

import deletePost from "../redux/actions/deletePost";

const ReduxState = (props) => {
  const handleClick = (id) => {
    props.deletePost(id);
  };
  return (
    <div>
      {props.posts.map(({ title, body, id }, index) => (
        <div key={index}>
          <h1>{title}</h1>
          <p>{body}</p>
          <button onClick={() => handleClick(id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxState);
