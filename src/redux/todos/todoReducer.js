import { ADD, REMOVE } from "./actionsTypes";

const initialState = [{}];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
    }
    case REMOVE: {
    }
    default:
      state;
  }
};

export default todoReducer;
