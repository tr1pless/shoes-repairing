import styles from "./navigation.module.css";
import { Main } from "../Main/Main";
import { About } from "../About/About";
import { Pricelist } from "../Pricelist/Pricelist";
import { Contacts } from "../Conctacts/Conctacts";
import React from "react";
import { NavLink, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { lat, rus } from "../language/navigation.json";
import { useSelector, useDispatch } from "react-redux";
import { language } from "../store/counterSlice";
import { latvian, russian } from "../Constants";

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
  const lang = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <nav className={styles.navigation}>
        <button
          className={styles.navigation__lvru}
          onClick={() => dispatch(language())}
        >
          {lang == 0 ? latvian : russian}
        </button>

        <ul className={styles.list}>
          <li className={styles.list__item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.active__link}` : `${styles.list__link}`
              }
              to="/"
            >
              {lang == 1 ? lat.main : rus.main}
            </NavLink>
          </li>
          <li className={styles.list__item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.active__link}` : `${styles.list__link}`
              }
              to="/About"
            >
              {lang == 1 ? lat.about : rus.about}
            </NavLink>
          </li>
          <li className={styles.list__item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.active__link}` : `${styles.list__link}`
              }
              to="/Pricelist"
            >
              {lang == 1 ? lat.pricelist : rus.pricelist}
            </NavLink>
          </li>
          <li className={styles.list__item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.active__link}` : `${styles.list__link}`
              }
              to="/Contacts"
            >
              {lang == 1 ? lat.contacts : rus.contacts}
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route element={<AnimationLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="/Pricelist" element={<Pricelist />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};
