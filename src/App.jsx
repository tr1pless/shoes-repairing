import React from "react";
import styles from "./app.module.css";
import { Main } from "./components/Main/Main";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { About } from "./components/About/About";

function App() {
  return (
    <>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/About">О нас</Link>
          </li>
          <li>
            <Link to="/Pricelist">Цены</Link>
          </li>
          <li>
            <Link to="/Contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/books" element={<BookList />} /> */}
      </Routes>
    </>
  );
}

export default App;
