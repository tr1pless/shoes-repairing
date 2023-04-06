import React from 'react'
import styles from './pricelist.module.css'
import { pricesStyle } from '../Constants'
import { Link } from 'react-router-dom'
import data from '../language/pricelist.json'
import { useSelector } from 'react-redux'

export const Pricelist = () => {
  const shoesFirstRus = Object.entries(data.rus.shoes.firstRow)
  const shoesFirstLat = Object.entries(data.lat.shoes.firstRow)
  const shoesSecondRus = Object.entries(data.rus.shoes.secondRow)
  const shoesSecondLat = Object.entries(data.lat.shoes.secondRow)
  const sharpingRus = Object.entries(data.rus.sharping)
  const sharpingLat = Object.entries(data.lat.sharping)
  const keysRus = Object.entries(data.rus.keys)
  const keysLat = Object.entries(data.lat.keys)
  const contactsRus = data.rus.contacts.text
  const contactsLat = data.lat.contacts.text
  const lang = useSelector((state) => state.counter.value)
  return (
    <>
      <section className={styles.pricelist__container} style={pricesStyle}>
        <div className={styles.pl__listContainer}>
          <p className={styles.pl__listTitle}>{lang ? 'Cenas' : 'Цены'}</p>
          <div className={styles.pl__list}>
            <div
              className={`${styles.pl__columnsContainer} + ${styles.pl__columnsContainerFirst}`}
            >
              <div>
                <img src={`./../assets/shoe.png`} alt='' />
                <ul
                  className={`${styles.pl__itemList} + ${styles.pl__itemListFirst}`}
                >
                  {+lang === 0
                    ? shoesSecondRus.map((value, key) => {
                        return <li key={key}>{value[1]}</li>
                      })
                    : shoesSecondLat.map((value, key) => {
                        return <li key={key}>{value[1]}</li>
                      })}
                </ul>
              </div>
              <ul
                className={`${styles.pl__itemList} + ${styles.pl__itemListSecond}`}
              >
                {+lang === 0
                  ? shoesFirstRus.map((value, key) => {
                      return <li key={key}>{value[1]}</li>
                    })
                  : shoesFirstLat.map((value, key) => {
                      return <li key={key}>{value[1]}, </li>
                    })}
              </ul>
            </div>
            <div className={styles.pl__columnsContainer}>
              <div>
                <img
                  className={styles.pl__knife}
                  src='./assets/knife.png'
                  alt=''
                />
                <ul className={styles.pl__itemList}>
                  {+lang === 0
                    ? sharpingRus.map((value, key) => {
                        return <li key={key}>{value[1]}</li>
                      })
                    : sharpingLat.map((value, key) => {
                        return <li key={key}>{value[1]}</li>
                      })}
                </ul>
              </div>
              <div>
                <img
                  style={{ marginTop: '5px' }}
                  src='./assets/key.png'
                  alt=''
                />
                <ul className={styles.pl__itemList}>
                  {+lang === 0
                    ? keysRus.map((value, key) => {
                        return <li key={key}>{value[1]}</li>
                      })
                    : keysLat.map((value, key) => {
                        return <li key={key}>{value[1]}</li>
                      })}
                </ul>
              </div>
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
    </>
  )
}
