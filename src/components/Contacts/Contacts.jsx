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
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

export const Contacts = () => {
  const [active, setActive] = useState(false)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const lang = useSelector((state) => state.counter.value)
  const handleLoad = () => {
    setLoading(false)
  }

  const SERVICE_ID = 'service_pgajy1j'
  const TEMPLATE_ID = 'template_o4uzvg9'
  const USER_ID = 'TR5PHEAy4hnjGz-gg'

  const sendMessage = (e) => {
    if (email !== '' && name !== '' && phone !== '' && message !== '') {
      e.preventDefault()
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
        (result) => {
          console.log(result.text)
          Swal.fire({
            icon: 'success',
            title:
              'Thank you for your message, i will answer you as soon as possible',
          })
        },
        (error) => {
          console.log(error.text)
          Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
          })
        },
      )
      e.target.reset()
    } else {
      e.preventDefault()
      alert('Заполните все поля')
    }
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
          <div className={styles.contactForm}>
            <div className={styles.contactFormDecorUp}></div>

            <div className={styles.contactFormDecor}></div>

            <form onSubmit={sendMessage}>
              <div className={styles.inputWrapper}>
                <input
                  className={styles.contactInput}
                  type='text'
                  value={name}
                  placeholder='YOUR NAME'
                  name='user_name'
                  onChange={(e) => setName(e.value)}
                />
                <input
                  className={styles.contactInput}
                  type='text'
                  value={email}
                  placeholder='YOUR EMAIL'
                  name='user_email'
                  onChange={(e) => setEmail(e.value)}
                />
                <input
                  className={styles.contactInput}
                  type='text'
                  value={phone}
                  name='user_phone'
                  placeholder='PHONE NUMBER'
                  onChange={(e) => setPhone(e.value)}
                />
              </div>
              <div className={styles.contactFormMiddle}>
                <input
                  className={`${styles.contactInput} ${styles.contactMessage}`}
                  type='text'
                  value={message}
                  placeholder='YOUR MESSAGE'
                  name='user_message'
                  onChange={(e) => setMessage(e.value)}
                />
              </div>
              <button className={styles.contactButton}>
                {+lang === 0 ? 'отправить' : 'nosūtīt'}
              </button>
            </form>
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
