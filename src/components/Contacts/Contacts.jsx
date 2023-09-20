import React, { useState } from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import {
  contactsStyle,
  mailImage,
  phoneImage,
  whatsappImage,
  serviceContacts,
  mapArrow,
  mapClose,
  arrow,
  mainStyle,
} from '../Constants'
import styles from './contacts.module.css'
import { useSelector } from 'react-redux'

export const Contacts = () => {
  const [active, setActive] = useState(false)
  const [loading, setLoading] = useState(true)
  const lang = useSelector((state) => state.counter.value)
  const handleLoad = () => {
    setLoading(false)
  }

  return (
    <>
      <img
        style={loading ? { opacity: 0 } : { opacity: 1 }}
        className={styles.backgroundImg}
        src='./../assets/contactsBg.jpg'
        alt=''
        onLoad={handleLoad}
      />
      {loading ? (
        <section className={styles.spinnerWrp} style={mainStyle}>
          <InfinitySpin width='200' color='rgb(160 45 34)' />
        </section>
      ) : (
        <div style={contactsStyle} className={styles.contacts}>
          <div className={styles.contacts__mapWrp}>
            <div
              style={{ marginLeft: `${active ? 0 : -805}px` }}
              className={styles.contacts__map}
            >
              <iframe
                className={styles.contacts__apiMap}
                src={
                  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1087.181558253436!2d24.243133144970518!3d56.97684133542055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecc261285b3d9%3A0xb9bca28c99238cd6!2zUsSrdmFzIGllbGEgNCwgVmlkemVtZXMgcHJpZWvFoXBpbHPEk3RhLCBSxKtnYSwgTFYtMTA2NA!5e0!3m2!1sru!2slv!4v1678373818414!5m2!1sru!2slv'
                }
                width={'800'}
                height={'400'}
                style={{ border: '0' }}
                allowFullScreen={''}
                loading={'lazy'}
                referrerPolicy={'no-referrer-when-downgrade'}
              ></iframe>
            </div>
            <button
              style={{ zIndex: '10', display: `${active ? 'none' : 'block'}` }}
              className={styles.contacts__mapButtonOpen}
              onClick={() => {
                setActive(!active)
              }}
            >
              {mapArrow}
            </button>
            <button
              style={{ zIndex: '10', display: `${active ? 'block' : 'none'}` }}
              className={styles.contacts__mapButtonClose}
              onClick={() => {
                setActive(!active)
              }}
            >
              {mapClose}
            </button>
            <div
              style={{ zIndex: '1', opacity: `${active ? '0' : '1'}` }}
              className={styles.contacts__pointerWrp}
            >
              <p className={styles.contacts__mapPointerTxt}>
                {!lang ? 'КАРТА' : 'KARTE'}
              </p>
              <div className={styles.contacts__mapPointer}>{arrow}</div>
            </div>
          </div>
          <div className={styles.contacts__list}>
            <ul className={styles.contacts__linksList}>
              <li
                style={{ marginBottom: '25px', paddingTop: '30px' }}
                className={styles.contacts__listItem}
              >
                <a
                  href='mailto: rivasiela4@gmail.com'
                  className={styles.contacts__listLink}
                  target='_blank'
                >
                  <span style={mailImage} />
                  {serviceContacts[0].email}
                </a>
              </li>
              <li
                style={{ marginBottom: '25px' }}
                className={styles.contacts__listItem}
              >
                <a
                  href='tel:+37129993961'
                  className={styles.contacts__listLink}
                  target='_blank'
                >
                  <span style={phoneImage} />
                  {serviceContacts[0].phone}
                </a>
              </li>
              <li
                className={styles.contacts__listItem}
                style={{ paddingBottom: '30px' }}
              >
                <a
                  href='https://wa.me/+37129993961'
                  className={styles.contacts__listLink}
                  target='_blank'
                >
                  <span style={whatsappImage} />
                  {serviceContacts[0].phone}
                </a>
              </li>
              <li className={styles.contacts__listItem}>
                <p className={styles.contacts__address}>
                  Rīvas iela 4, Vidzemes priekšpilsēta, Rīga, LV-1064
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
