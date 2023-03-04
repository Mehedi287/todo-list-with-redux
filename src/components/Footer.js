import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  colorsSelected,
  filterByColorSelect,
  statusSelected,
} from "../redux/filters/actions";

const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const colors = useSelector((state) => state.filter.colors);
  const updatedStatus = useSelector((state) => state.filter.status);
  const dispatch = useDispatch();

  const handleStatusChange = (status) => {
    dispatch(statusSelected(status));
  };
  const handleTaskText = (totalTask) => {
    switch (totalTask) {
      case 0:
        return "No Task Left";
      case 1:
        return "1 Task Left";

      default:
        return `${totalTask} Tasks Left`;
    }
  };
  console.log(colors);
  const totalTaskLeft = todos.filter((todo) => !todo.complet);
  const handleChangeColors = (color) => {
    const exsigtningColor = colors.includes(color);
    console.log(exsigtningColor);

    if (exsigtningColor) {
      dispatch(filterByColorSelect(color, "remove"));
    } else {
      dispatch(filterByColorSelect(color, "add"));
    }
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p> {handleTaskText(totalTaskLeft.length)} </p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${
            updatedStatus === "all" && "font-bold "
          } `}
          onClick={() => handleStatusChange("all")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            updatedStatus === "incomplete" && "font-bold "
          } `}
          onClick={() => handleStatusChange("incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            updatedStatus === "completed" && "font-bold "
          } `}
          onClick={() => handleStatusChange("completed")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          } `}
          onClick={() => handleChangeColors("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2  border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          } `}
          onClick={() => handleChangeColors("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          } `}
          onClick={() => handleChangeColors("yellow")}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
