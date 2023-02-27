import React from "react";
import { SELECTEDCLOLORS, SELECTEDSTATUS } from "./actionsType";
const initialState = {
  status: "all",
  colors: ["red"],
};
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTEDCLOLORS:
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "add":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "remove":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };

        default:
          return state;
      }
    case SELECTEDSTATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
