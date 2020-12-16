import { connect } from "react-redux";

const ReduxRouteParameter = (props) => {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <p>{props.post.body}</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    post: state.posts.find((post) => post.id === +id),
  };
};

export default connect(mapStateToProps)(ReduxRouteParameter);
