import { NavLink } from "react-router-dom";

export default function NavItem({ path, text, logo = false }) {
  const linkClass = logo ? "logoLink" : "navLink";

  return (
    <li className="pr-4">
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
