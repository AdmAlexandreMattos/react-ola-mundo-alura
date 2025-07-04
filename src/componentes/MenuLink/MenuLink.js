import styles from "./MenuLink.module.css";
import { NavLink } from "react-router-dom";

export const MenuLink = ({ children, to }) => {
  return (
    <NavLink
      className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
      to={to}
      end
    >
      {children}
    </NavLink>
  );
};
