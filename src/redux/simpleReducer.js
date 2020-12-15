const initialState = {
  posts: [
    {
      title: "hello redux",
      body: "post body",
    },
  ],
};

const simpleReducer = (state = initialState, action) => {
  return state;
};

export default simpleReducer;
