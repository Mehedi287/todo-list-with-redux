import {
  ADDED,
  REMOVETODO,
  TOGGOLED,
  COLORSSELECTED,
  COMPLETALL,
  CLEARECOMPLETED,
} from "./actionsTypes";

const initialState = [
  {
    id: 1,
    text: "learn redux",
    complet: false,
    color: "red",
  },
  {
    id: 2,
    text: "learn  rect",
    complet: true,
    color: "green",
  },
  {
    id: 3,
    text: "learn  rect",
    complet: true,
    color: "green",
  },
];
const nextId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => {
    Math.max(maxId, todo.id);
  }, 0);
  return maxId + 1;
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextId(state),
          text: action.payload,
        },
      ];
    case REMOVETODO:
      return state.filter((todo) => todo.id !== action.payload);
    case TOGGOLED:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            complet: !todo.complet,
          };
        } else {
          return {
            ...todo,
          };
        }
      });
    case COLORSSELECTED:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            color: action.payload.color,
          };
        } else {
          return todo;
        }
      });
    case COMPLETALL:
      return state.map((todo) => {
        return {
          ...todo,
          complet: true,
        };
      });
    case CLEARECOMPLETED:
      return state.filter((todo) => todo.complet !== true);
    default:
      return state;
  }
};

export default todoReducer;
