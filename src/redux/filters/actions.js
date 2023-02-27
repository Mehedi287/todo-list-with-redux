import { SELECTEDCLOLORS, SELECTEDSTATUS } from "./actionsType";

export const statusSelected = (status) => {
  return {
    type: SELECTEDSTATUS,
    payload: status,
  };
};
export const colorsSelected = (color, changeType) => {
  return {
    type: SELECTEDCLOLORS,
    payload: {
      color,
      changeType,
    },
  };
};
