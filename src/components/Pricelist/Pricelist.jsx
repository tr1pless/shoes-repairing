import React, { useEffect, useState } from 'react'
import styles from './pricelist.module.css'
import { mainStyle, pricesStyle } from '../Constants'
import { Link } from 'react-router-dom'
import data from '../language/pricelist.json'
import { useSelector } from 'react-redux'
import { InfinitySpin } from 'react-loader-spinner'
import { nanoid } from 'nanoid'

export const Pricelist = () => {
  const [loading, setLoading] = useState(true)
  const [activeNav, setActiveNav] = useState(0)
  const [category, setCategory] = useState(0)

  const categoryList = [
    {
      'nameLat': 'shoesLat',
      'nameRus': 'shoesRus',
      'id': 0,
    },
    {
      'nameRus': 'shoesRus',
      'nameLat': 'shoesLat',

      'id': 1,
    },
    {
      'nameRus': 'sharpingRus',
      'nameLat': 'sharpingLat',

      'id': 2,
    },
    {
      'nameRus': 'keysRus',
      'nameLat': 'keysLat',

      'id': 3,
    },
    {
      'nameRus': 'otherRus',
      'nameLat': 'otherLat',

      'id': 4,
    },
  ]

  const navRus = data.rus.nav
  const navLat = data.lat.nav

  const shoesRus = Object.entries(data.rus.shoes)
  const shoesLat = Object.entries(data.lat.shoes)
  const sharpingRus = Object.entries(data.rus.sharping)
  const sharpingLat = Object.entries(data.lat.sharping)
  const keysRus = Object.entries(data.rus.keys)
  const keysLat = Object.entries(data.lat.keys)
  const otherRus = Object.entries(data.rus.other)
  const otherLat = Object.entries(data.lat.other)
  const contactsRus = data.rus.contacts.text
  const contactsLat = data.lat.contacts.text
  const lang = useSelector((state) => state.counter.value)

  const id = nanoid(4)

  const handleLoad = () => {
    setLoading(false)
  }

  const navItemChoice = (e, id) => {
    if (activeNav === +e.target.id) {
      setActiveNav(0)
    } else {
      setActiveNav(+e.target.id)
    }
  }
  return (
    <>
      <img
        style={loading ? { opacity: 0 } : { opacity: 1 }}
        className={styles.backgroundImg}
        src='./../assets/pricesBg.jpg'
        alt=''
        onLoad={handleLoad}
      />
      {loading ? (
        <section className={styles.spinnerWrp} style={mainStyle}>
          <InfinitySpin width='200' color='rgb(160 45 34)' />
        </section>
      ) : (
        <section className={styles.pricelist__container} style={pricesStyle}>
          <div className={styles.pricesWrp}>
            <div className={styles.pricesNav}>
              {+lang === 0
                ? navRus.map((item) => {
                    return (
                      <button
                        className={
                          activeNav === item.id
                            ? `${styles.navItem} ${styles.activeNavItem}`
                            : `${styles.navItem}`
                        }
                        id={item.id}
                        onClick={(e) => {
                          navItemChoice(e, item.id)
                        }}
                        key={item.id}
                      >
                        {item.name}
                      </button>
                    )
                  })
                : navLat.map((item) => {
                    return (
                      <button
                        className={
                          activeNav === item.id
                            ? `${styles.navItem} ${styles.activeNavItem}`
                            : `${styles.navItem}`
                        }
                        id={item.id}
                        onClick={(e) => {
                          navItemChoice(e, item.id)
                        }}
                        key={item.id}
                      >
                        {item.name}
                      </button>
                    )
                  })}
            </div>
            <div className={styles.priceListBox}>
              <div
                style={{ transform: `translateX(-${activeNav}00%)` }}
                className={styles.pricelistItem}
              >
                <p
                  style={{ margin: '  auto ' }}
                  className={styles.pricelistText}
                >
                  {+lang === 0
                    ? 'Все цены за исключением ключей могут отличаться в зависимости от усложняющих ремонт нюансов. Так же цены могут быть ниже при больших объемах работы. Так же мы делаем скидки для больших обьемов изготовленя ключей и чипов.'
                    : 'Visas cenas, izņemot atslēgas, var atšķirties atkarībā no niansēm, kas sarežģī remontu. Tāpat cenas var būt zemākas lieliem darbu apjomiem. Piedāvājam arī atlaides liela apjoma atslēgām un čipām.'}
                </p>
              </div>

              <div
                style={{ transform: `translateX(-${activeNav}00%)` }}
                className={`${styles.pricelistItem} ${styles.shoesList}`}
              >
                <div>
                  {+lang === 1
                    ? shoesLat.map((item) => {
                        if (item[0] <= 10) {
                          console.log(lang)
                          return <p key={item[0]}>{item[1]}</p>
                        }
                      })
                    : shoesRus.map((item) => {
                        if (item[0] <= 10) {
                          return <p key={item[0]}>{item[1]}</p>
                        }
                      })}
                </div>
                <div>
                  {+lang === 1
                    ? shoesLat.map((item) => {
                        if (item[0] > 10) {
                          return <p key={item[0]}>{item[1]}</p>
                        }
                      })
                    : shoesRus.map((item) => {
                        if (item[0] > 10) {
                          return <p key={item[0]}>{item[1]}</p>
                        }
                      })}
                </div>
              </div>
              <div
                style={{ transform: `translateX(-${activeNav}00%)` }}
                className={styles.pricelistItem}
              >
                {+lang === 1
                  ? sharpingLat.map((item) => {
                      return <p key={item[0]}>{item[1]}</p>
                    })
                  : sharpingRus.map((item) => {
                      return <p key={item[0]}>{item[1]}</p>
                    })}
              </div>
              <div
                style={{ transform: `translateX(-${activeNav}00%)` }}
                className={styles.pricelistItem}
              >
                {+lang === 1
                  ? keysLat.map((item) => {
                      return <p key={item[0]}>{item[1]}</p>
                    })
                  : keysRus.map((item) => {
                      return <p key={item[0]}>{item[1]}</p>
                    })}
              </div>
              <div
                style={{ transform: `translateX(-${activeNav}00%)` }}
                className={styles.pricelistItem}
              >
                {+lang === 1
                  ? otherLat.map((item) => {
                      return <p key={item[0]}>{item[1]}</p>
                    })
                  : otherRus.map((item) => {
                      return <p key={item[0]}>{item[1]}</p>
                    })}
              </div>
            </div>
          </div>
          <div className={styles.pl__extraContainer}>
            <p className={styles.extraText}>
              {+lang === 0 ? contactsRus : contactsLat}
            </p>
            <div className={styles.extraLink__container}>
              <Link className={styles.list__link} to='/Contacts'>
                <button className={styles.extraButton} type='button'>
                  <span>{+lang === 0 ? 'Контакты' : 'KONTAKTI'}</span>
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
