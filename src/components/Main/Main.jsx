import React, { useState } from 'react'
import { mainStyle } from '../Constants'
import data from '../language/main.json'
import { useSelector } from 'react-redux'
import styles from './main.module.css'
import { InfinitySpin } from 'react-loader-spinner'

export const Main = () => {
  // const rusText = Object.entries(data.rus.text)
  // const latText = Object.entries(data.lat.text)
  const lang = useSelector((state) => state.counter.value)

  const [loading, setLoading] = useState(true)

  const handleLoad = () => {
    setLoading(false)
  }

  return (
    <>
      <img
        style={loading ? { opacity: 0 } : { opacity: 1 }}
        className={styles.backgroundImg}
        src='./../assets/oldMain.jpg'
        alt=''
        onLoad={handleLoad}
      />

      {!loading ? (
        <section style={mainStyle}>
          <div className={styles.mainTitle}>
            {!lang ? (
              <p className={styles.mainTitleText}>
                Поможем <br />
                оживить старое <br /> или <br />
                создать новое !
              </p>
            ) : (
              <p className={styles.mainTitleText}>
                Palīdzēsim <br />
                atdzīvināt veco <br /> vai <br />
                radīt jaunu!
              </p>
            )}
            {!lang ? (
              <h2 className={styles.mainAboutTitle}>Кто мы ?</h2>
            ) : (
              <h2 className={styles.mainAboutTitle}>Kas mēs esam?</h2>
            )}

            <ul className={styles.mainList}>
              {!lang ? (
                <li className={styles.mainListItem}>
                  Специалисты своего дела.
                </li>
              ) : (
                <li className={styles.mainListItem}>Eksperti savā jomā.</li>
              )}
              {!lang ? (
                <li className={styles.mainListItem}>Не боимся сложностей.</li>
              ) : (
                <li className={styles.mainListItem}>
                  Mēs nebaidāmies no grūtībām.
                </li>
              )}
              {!lang ? (
                <li className={styles.mainListItem}>
                  Всегда готовы пойти на встречу клиенту.
                </li>
              ) : (
                <li className={styles.mainListItem}>
                  Vienmēr esam gatavi apmierināt klienta vajadzības.
                </li>
              )}
              {!lang ? (
                <li className={styles.mainListItem}>
                  Слова "качество" и "ответсвенность" для нас не пустой звук.
                </li>
              ) : (
                <li className={styles.mainListItem}>
                  Vārdi “kvalitāte” un “atbildība” mums nav tukši vārdi.
                </li>
              )}
            </ul>
          </div>
          {/* <Carousel>{lang ? latvian : russian}</Carousel> */}
        </section>
      ) : (
        <section className={styles.spinnerWrp} style={mainStyle}>
          <InfinitySpin width='200' color='rgb(160 45 34)' />
        </section>
      )}
    </>
  )
}
