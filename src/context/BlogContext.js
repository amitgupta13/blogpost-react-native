import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "delete_blogpost":
      return state.filter(item => item.id !== action.payload);
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case "edit_blogpost":
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};

const addBlogPost = dispatch => (title, content, callback) => {
  dispatch({ type: "add_blogpost", payload: { title, content } });
  if (callback) {
    callback();
  }
};

const editBlogPost = dispatch => (id, title, content, callback) => {
  dispatch({ type: "edit_blogpost", payload: { id, title, content } });
  if (callback) {
    callback();
  }
};

const deleteBlogPost = dispatch => id =>
  dispatch({ type: "delete_blogpost", payload: id });

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    addBlogPost,
    deleteBlogPost,
    editBlogPost
  },
  [{ title: "test post", content: "test content", id: 1 }]
);
