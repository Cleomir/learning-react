const initialState = {
  posts: [
    {
      id: 1,
      title: "hello redux 1",
      body: "post body 1",
    },
    {
      id: 2,
      title: "hello redux 2",
      body: "post body 2",
    },
  ],
};

const simpleReducer = (state = initialState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter((post) => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts,
    };
  }

  return state;
};

export default simpleReducer;
