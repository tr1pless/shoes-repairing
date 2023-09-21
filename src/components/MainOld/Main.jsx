import React, { useState } from 'react'
import Carousel, { CarouselItem } from '../Carousel/Carousel'
import { mainStyle } from '../Constants'
import data from '../language/main.json'
import { useSelector } from 'react-redux'
import styles from './main.module.css'
import { InfinitySpin } from 'react-loader-spinner'

export const Main = () => {
  const rusText = Object.entries(data.rus.text)
  const latText = Object.entries(data.lat.text)
  const lang = useSelector((state) => state.counter.value)

  const [loading, setLoading] = useState(true)

  const russian = rusText.map((value, key) => {
    return (
      <CarouselItem key={key}>
        <p className={styles.carousel__text}>{value[1]}</p>
      </CarouselItem>
    )
  })

  const latvian = latText.map((value, key) => {
    return (
      <>
        <CarouselItem key={key}>
          <p className={styles.carousel__text}>{value[1]}</p>
        </CarouselItem>
      </>
    )
  })
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
          <Carousel>{lang ? latvian : russian}</Carousel>
        </section>
      ) : (
        <section className={styles.spinnerWrp} style={mainStyle}>
          <InfinitySpin width='200' color='rgb(160 45 34)' />
        </section>
      )}
    </>
  )
}
