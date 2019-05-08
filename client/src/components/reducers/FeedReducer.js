import uuid from 'uuid/v4';

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, {id: uuid(), name: action.name, at: action.at, text: action.text}];

    case "REMOVE":
      return state.filter(f => f.id !== action.id);

    default:
      return state;
  }
};

export default reducer;
