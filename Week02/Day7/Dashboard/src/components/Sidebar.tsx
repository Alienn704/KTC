import { Link, NavLink } from "react-router";

const Sidebar = () => {
  const links = [
    { path: "/patients", label: "Patients" },
    { path: "/departments", label: "Departments" },
    { path: "/doctors", label: "Doctors" },
    { path: "/history", label: "History" },
    { path: "/map", label: "Map" },
    { path: "/overview", label: "Overview" },
    { path: "/settings", label: "Settings" },
  ];
  return (
    <Link to="/settings" className="w-60 bg-white border-r min-h-screen p-4">
      <div className="text-xl font-bold mb-6">H-care</div>
      <nav className="flex flex-col gap-2">
        {links.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `p-2 rounded hover:bg-blue-100 ${
                isActive ? "bg-blue-100 text-blue-600 font-semibold" : ""
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </Link>
  );
};

export default Sidebar;
