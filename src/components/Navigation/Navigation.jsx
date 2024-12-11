import styles from './navigation.module.css'
import React, { useEffect, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
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

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (width <= 500 || height <= 500) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [width, height])

  useEffect(() => {
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
  }, [
    lang,
    data.lat.main,
    data.lat.about,
    data.lat.pricelist,
    data.lat.contacts,
    data.rus.main,
    data.rus.about,
    data.rus.pricelist,
    data.rus.contacts,
  ])

  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.downLine}></div>
        <div className={styles.downLineUp}></div>

        <ul className={styles.list}>
          <button
            name='language'
            className={styles.navigation__lvru}
            onClick={() => dispatch(language())}
          >
            {+lang === 0 ? 'LV' : 'RU'}
          </button>
          <li className={styles.list__item}>
            <NavLink
              name='main'
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
              name='about'
              className={({ isActive }) =>
                isActive ? `${styles.active__link} ` : `${styles.list__link} `
              }
              to='/about'
            >
              {!mobile ? aboutValue : about}
            </NavLink>
          </li>
          <li className={styles.list__item}>
            <NavLink
              name='pricelist'
              className={({ isActive }) =>
                isActive ? `${styles.active__link}  ` : `${styles.list__link} `
              }
              to='/pricelist'
            >
              {!mobile ? pricelistValue : pricelist}
            </NavLink>
          </li>
          <li className={styles.list__item}>
            <NavLink
              name='contacts'
              className={({ isActive }) =>
                isActive ? `${styles.active__link} ` : `${styles.list__link} `
              }
              to='/contacts'
            >
              {!mobile ? contactsValue : contacts}
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/main' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/pricelist' element={<Pricelist />} />
        <Route path='/contacts' element={<Contacts />} />
{/*         <Route path='*' element={<Main />} /> */}
      </Routes>
    </>
  )
}
