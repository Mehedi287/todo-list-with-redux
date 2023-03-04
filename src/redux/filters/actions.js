import { SELECTEDCLOLORS, SELECTEDSTATUS } from "./actionsType";

export const statusSelected = (status) => {
  return {
    type: SELECTEDSTATUS,
    payload: status,
  };
};
export const filterByColorSelect = (color, changeType) => {
  return {
    type: SELECTEDCLOLORS,
    payload: {
      color,
      changeType,
    },
  };
};
