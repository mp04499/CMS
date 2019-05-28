const reducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.feeds;

    case "REMOVE":
      return state.filter(f => f.id !== action.id);

    case "ADD":
      return [...state, action.post];

    default:
      return state;
  }
};

export default reducer;
