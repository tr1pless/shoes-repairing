import styles from './navigation.module.css'
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import data from '../language/navigation.json'
import { useSelector, useDispatch } from 'react-redux'
import { language } from '../store/counterSlice'
import {
  latvian,
  russian,
  home,
  contacts,
  pricelist,
  about,
} from '../Constants'
import { About } from '../About/About'
import { Contacts } from '../Contacts/Contacts'
import { Main } from '../Main/Main'
import { Pricelist } from '../Pricelist/Pricelist'

const PageLayout = ({ children }) => children
const pageVariants = {
  initial: {
    opacity: 0.9,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0.7,
  },
}

const pageTransition = {
  delay: 0.2,
  type: 'spring',
  duration: 2,
}

const AnimationLayout = () => {
  const { pathname } = useLocation()
  return (
    <PageLayout>
      <motion.div
        key={pathname}
        initial='initial'
        animate='in'
        variants={pageVariants}
        transition={pageTransition}
        style={{ position: 'relative' }}
      >
        <Outlet />
      </motion.div>
    </PageLayout>
  )
}

export const Navigation = () => {
  const lang = useSelector((state) => state.counter.value)
  const [mobile, setMobile] = useState(false)
  const [mainValue, setMain] = useState('')
  const [aboutValue, setAbout] = useState('')
  const [pricelistValue, setPricelist] = useState('')
  const [contactsValue, setContacts] = useState('')
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  const dispatch = useDispatch()
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    if (width <= 500) {
      setMobile(true)
    } else if (height <= 500) {
      setMobile(true)
    } else {
      setMobile(false)
      if (+lang === 1) {
        setMain(data.lat.main)
        setAbout(data.lat.about)
        setPricelist(data.lat.pricelist)
        setContacts(data.lat.contacts)
      } else {
        setMain(data.rus.main)
        setAbout(data.rus.about)
        setPricelist(data.rus.pricelist)
        setContacts(data.rus.contacts)
      }
    }
  }, [lang, height, width])

  return (
    <>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <button
            className={styles.navigation__lvru}
            onClick={() => dispatch(language())}
          >
            {+lang === 0 ? latvian : russian}
          </button>
          <li className={styles.list__item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.active__link} ` : `${styles.list__link} `
              }
              to='/'
            >
              {!mobile ? mainValue : home}
            </NavLink>
          </li>
          <li className={styles.list__item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.active__link} ` : `${styles.list__link} `
              }
              to='/About'
            >
              {!mobile ? aboutValue : about}
            </NavLink>
          </li>
          <li className={styles.list__item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.active__link}  ` : `${styles.list__link} `
              }
              to='/Pricelist'
            >
              {!mobile ? pricelistValue : pricelist}
            </NavLink>
          </li>
          <li className={styles.list__item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.active__link} ` : `${styles.list__link} `
              }
              to='/Contacts'
            >
              {!mobile ? contactsValue : contacts}
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route element={<AnimationLayout />}>
          <Route path='/' element={<Main />} />
          <Route path='/About' element={<About />} />
          <Route path='/Pricelist' element={<Pricelist />} />
          <Route path='/Contacts' element={<Contacts />} />
          <Route path='*' element={<Main />} />
        </Route>
      </Routes>
    </>
  )
}
