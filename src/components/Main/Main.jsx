import React, { useEffect, useState } from 'react'
import Carousel, { CarouselItem } from '../Carousel/Carousel'
import { mainStyle } from '../Constants'
import data from '../language/main.json'
import { useSelector } from 'react-redux'

import styles from './main.module.css'
import { Triangle } from 'react-loader-spinner'

export const Main = () => {
  const rusText = Object.entries(data.rus.text)
  const latText = Object.entries(data.lat.text)
  const lang = useSelector((state) => state.counter.value)
  const [firstRender, setFirstRender] = useState(true)
  useEffect(() => {
    setFirstRender(false)
  }, [])

  const russian = rusText.map((value, key) => {
    return (
      <CarouselItem key={key}>
        <p className={styles.carousel__text}>{value[1]}</p>
      </CarouselItem>
    )
  })

  const latvian = latText.map((value, key) => {
    return (
      <CarouselItem key={key}>
        <p className={styles.carousel__text}>{value[1]}</p>
      </CarouselItem>
    )
  })

  return (
    <>
      {firstRender && (
        <Triangle
          height='80'
          width='80'
          radius='9'
          color='blue'
          ariaLabel='triangle-loading'
          visible={true}
        />
      )}
      {!firstRender && (
        <section style={mainStyle}>
          <Carousel>{lang ? latvian : russian}</Carousel>
        </section>
      )}
      {/* <section style={mainStyle}> */}
      {/* <Carousel>{lang ? latvian : russian}</Carousel> */}
      {/* </section> */}
    </>
  )
}
