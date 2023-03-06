import styles from "./navigation.module.css";
import { Main } from "../Main/Main";
import { About } from "../About/About";
import { Pricelist } from "../Pricelist/Pricelist";
import React from "react";
import {
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { motion } from "framer-motion";

const PageLayout = ({ children }) => children;

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const AnimationLayout = () => {
  const { pathname } = useLocation();
  return (
    <PageLayout>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
    </PageLayout>
  );
};

export const Navigation = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.active__link}` : `${styles.list__link}`
              }
              to="/"
            >
              Главная
            </NavLink>
          </li>
          <li className={styles.list__item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.active__link}` : `${styles.list__link}`
              }
              to="/About"
            >
              О нас
            </NavLink>
          </li>
          <li className={styles.list__item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.active__link}` : `${styles.list__link}`
              }
              to="/Pricelist"
            >
              Цены
            </NavLink>
          </li>
          <li className={styles.list__item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.active__link}` : `${styles.list__link}`
              }
              to="/Contacts"
            >
              Контакты
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route element={<AnimationLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="/Pricelist" element={<Pricelist />} />
          {/* <Route path="/Contacts" element={<Carousel />} /> */}
        </Route>
      </Routes>
    </>
  );
};
