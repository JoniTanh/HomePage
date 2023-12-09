import { NavLink } from "react-router-dom";

export default function NavItem({ path, text, logo = false }) {
  const linkClass = logo ? "logoLink" : "navLink";

  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive && !logo ? `${linkClass} active` : linkClass
        }
        to={path}
      >
        {text}
      </NavLink>
    </li>
  );
}
