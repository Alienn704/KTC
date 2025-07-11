import { NavLink } from "react-router";
import SearchTask from "./SearchTask";

const Header = () => {
  return (
    <div>
        <SearchTask></SearchTask>
      <div>
        <NavLink
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
          to="/tasks"
        >
          Tasks
        </NavLink>
        <span className="mx-2">|</span>
        <NavLink
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
          to="/my-tasks"
        >
          My Tasks
        </NavLink>
        <span className="mx-2">|</span>
        <NavLink
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
          to="/create-task"
        >
          Create Task
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
