import { connect } from "react-redux";

const ReduxState = (props) => {
  return (
    <div>
      {props.posts.map(({ title, body }, index) => (
        <div key={index}>
          <h1>{title}</h1>
          <p>{body}</p>
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

export default connect(mapStateToProps)(ReduxState);
