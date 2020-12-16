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
  return state;
};

export default simpleReducer;
