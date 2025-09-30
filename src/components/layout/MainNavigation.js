import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useState, useEffect, useRef } from "react";
import { useFavoriteStore } from "../../store/favorites.store";

export default function MainNavigation() {
  const { isFavorite, counter } = useFavoriteStore();
  const [visible, setVisible] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${classes.header} ${visible ? "" : classes.hidden}`}
      data-test="navigation-header"
    >
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName={classes.active}>
              All Meetups
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-meetup" activeClassName={classes.active}>
              Add New Meetup
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" activeClassName={classes.active}>
              My Favorites
              <span className={classes.badge}>{counter()}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
