const {
  ADDED,
  REMOVETODO,
  COLORSSELECTED,
  COMPLETALL,
  TOGGOLED,
  CLEARECOMPLETED,
} = require("./actionsTypes");

export const addTodo = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};
export const removeTodo = (id) => {
  return {
    type: REMOVETODO,
    payload: id,
  };
};
export const coloreSelected = (id, color) => {
  return {
    type: COLORSSELECTED,
    payload: {
      id: id,
      color: color,
    },
  };
};

export const toggoled = (todoId) => {
  return {
    type: TOGGOLED,
    payload: todoId,
  };
};
export const cleareCompleted = () => {
  return {
    type: CLEARECOMPLETED,
  };
};
export const completAll = () => {
  return {
    type: COMPLETALL,
  };
};
