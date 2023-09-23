import React, { useState } from 'react'
import { aboutStyle, mainStyle } from '../Constants'
import styles from './about.module.css'
import data from '../language/about.json'
import { useSelector } from 'react-redux'
import { InfinitySpin } from 'react-loader-spinner'

export const About = () => {
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
        src='./../assets/aboutBg.jpg'
        alt=''
        onLoad={handleLoad}
      />
      {loading ? (
        <section className={styles.spinnerWrp} style={mainStyle}>
          <InfinitySpin width='200' color='rgb(160 45 34)' />
        </section>
      ) : (
        <section className={styles.about__container} style={aboutStyle}>
          <div className={styles.features}>
            <ul style={{ padding: 0 }} className={styles.about__feturesList}>
              <div
                className={`${styles.features__wrp} + ${styles.features__firstBox}`}
              >
                <li className={styles.features__titleWrp}>
                  <span className={styles.feature__icons}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='56'
                      height='50'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fill='#A894E1'
                        d='M10.149 7.381c-1.482-.008-3.343.795-4.763 2.214-.541.541-1.019 1.173-1.386 1.882 1.281-.969 2.647-1.273 4.247-.375.471-1.245 1.099-2.512 1.902-3.721zm8.477 8.461c-1.313.858-2.604 1.478-3.723 1.914.897 1.6.594 2.964-.376 4.244.712-.367 1.343-.844 1.884-1.386 1.425-1.423 2.229-3.288 2.215-4.772zm5.329-13.805c-.357-.025-.707-.037-1.051-.037-7.451 0-11.692 5.678-13.235 10.245l4.095 4.094c4.702-1.685 10.236-5.767 10.236-13.136 0-.38-.015-.768-.045-1.166zm-8.565 8.579c-.339-.338-.339-.886 0-1.224.338-.338.886-.338 1.224 0 .339.338.339.886 0 1.224-.339.339-.886.339-1.224 0zm2.449-2.448c-.677-.676-.677-1.772 0-2.449s1.773-.676 2.449 0c.677.676.677 1.772 0 2.449-.676.676-1.772.676-2.449 0zm-6.089 8.723c-1.469 1.797-3.812 3.084-6.126 3.084-3.2 0-5.624-2.354-5.624-5.311 0-1.485.611-3.122 2.043-4.689-3.201 5.137 1.532 9.831 7.101 4.31l.765.765c-.91 1.061-1.84 1.8-3.149 2.461 1.344.057 3.049-.568 4.195-1.416l.795.796z'
                      />
                    </svg>
                  </span>
                  <h2 className={styles.features__title}>
                    {!lang ? data.rus[1].title : data.lat[1].title}
                  </h2>
                </li>

                <li className={styles.features__text}>
                  {!lang ? data.rus[1].text : data.lat[1].text}
                </li>
              </div>
              <div className={styles.features__wrp}>
                <li className={styles.features__titleWrp}>
                  <span className={styles.feature__icons}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='52'
                      height='45'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fill='#A894E1'
                        d='M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z'
                      />
                    </svg>
                  </span>
                  <h2 className={styles.features__title}>
                    {!lang ? data.rus[2].title : data.lat[2].title}
                  </h2>
                </li>

                <li className={styles.features__text}>
                  {!lang ? data.rus[2].text : data.lat[2].text}
                </li>
              </div>
              <div
                style={{}}
                className={`${styles.features__wrp} +${styles.features__thirdBox}`}
              >
                <li className={styles.features__titleWrp}>
                  <span className={styles.feature__icons}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='70'
                      height='60'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fill='#A894E1'
                        d='M12 2.96l1.36 1.484 1.792-.935.764 1.853 1.998-.274.074 1.994 1.968.415-.62 1.89 1.701 1.05-1.237 1.563 1.237 1.563-1.701 1.05.62 1.89-1.968.415-.074 1.994-1.998-.274-.764 1.854-1.792-.935-1.36 1.483-1.36-1.484-1.792.935-.764-1.854-1.998.274-.074-1.994-1.968-.415.62-1.89-1.701-1.05 1.237-1.562-1.237-1.563 1.701-1.05-.62-1.89 1.968-.415.074-1.994 1.998.274.764-1.852 1.792.935 1.36-1.485zm0-2.96l-1.797 1.961-2.37-1.237-1.009 2.447-2.655-.363-.098 2.64-2.624.552.825 2.513-2.272 1.403 1.649 2.084-1.649 2.084 2.272 1.403-.825 2.513 2.624.553.098 2.64 2.655-.364 1.009 2.448 2.37-1.237 1.797 1.96 1.797-1.96 2.37 1.237 1.009-2.448 2.655.364.098-2.64 2.624-.553-.825-2.513 2.272-1.403-1.649-2.084 1.649-2.084-2.272-1.403.825-2.513-2.624-.553-.098-2.64-2.655.364-1.009-2.448-2.37 1.237-1.797-1.96zm3.082 14.629c-.338-.026-.307-.339.013-.397.528-.098.761-.381.761-.643 0-.221-.165-.426-.457-.493-.349-.079-.276-.315.013-.338.473-.038.703-.318.703-.587 0-.235-.177-.462-.524-.509-.357-.047-.241-.306.013-.384.218-.066.564-.208.564-.629 0-.28-.209-.651-.946-.621-.513.021-1.528-.082-2.075-.369.376-1.524.286-3.659-.705-3.659-.664 0-.79.753-.989 1.445-.716 2.487-1.981 2.943-3.453 3.168v4.137c2.787 0 3.375 1.25 5.46 1.25 1.333 0 2.021-.723 2.021-1.111 0-.139-.113-.238-.399-.26z'
                      />
                    </svg>
                  </span>
                  <h2 className={styles.features__title}>
                    {!lang ? data.rus[3].title : data.lat[3].title}
                  </h2>
                </li>
                <li className={styles.features__text}>
                  {!lang ? data.rus[3].text : data.lat[3].text}
                </li>
              </div>
            </ul>
          </div>
          <div className={styles.aboutUs}>
            <h2 className={styles.aboutUs__title}>
              {!lang ? data.rus[4].title : data.lat[4].title}
            </h2>
            <p className={styles.aboutUs__text}>
              {!lang ? data.rus[4].text : data.lat[4].text}
            </p>
          </div>
        </section>
      )}
    </>
  )
}
