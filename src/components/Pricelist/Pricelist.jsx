import React, { useState } from 'react'
import styles from './pricelist.module.css'
import { mainStyle, pricesStyle } from '../Constants'
import { Link } from 'react-router-dom'
import data from '../language/pricelist.json'
import { useSelector } from 'react-redux'
import { Triangle } from 'react-loader-spinner'

export const Pricelist = () => {
  const [loading, setLoading] = useState(true)
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

  const handleLoad = () => {
    setLoading(false)
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
          <Triangle
            height='300'
            width='300'
            radius='20'
            color='#903f4f'
            ariaLabel='triangle-loading'
            visible={true}
          />
        </section>
      ) : (
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
      )}
    </>
  )
}
