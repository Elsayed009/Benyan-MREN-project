import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const links = [
    { icon: "fa-users", text: "States", path: "/dashboard/home" },
    { icon: "fa-users", text: "Users Management", path: "/dashboard/users" },
    {
      icon: "fa-building",
      text: "Projects Management",
      path: "/dashboard/projects",
    },
    {
      icon: "fa-code",
      text: "Developers Management",
      path: "/developers",
    },
    { icon: "fa-globe", text: "Website CMS", path: "/cms" },
    { icon: "fa-comments", text: "Live Chat", path: "/chat" },
  ];
  return (
    <aside className={`${styles.sidebar} min-vh-100 d-flex flex-column py-4`}>
      <div className="fw-semibold fs-5 px-4 mb-4 text-white d-md-block d-none">
        Dashboard
      </div>

      <nav className="d-flex flex-column gap-1">
        {links.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `${styles.navItem} ${
                isActive ? styles.active : ""
              } d-flex align-items-center gap-3 px-4`
            }
          >
            <i className={`fa-solid ${item.icon} fs-6`}></i>
            <span>{item.text}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
