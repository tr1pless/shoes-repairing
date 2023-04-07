import React from 'react'

export const mainStyle = {
  //   backgroundImage: `url("/rez/images/wpMain.jpg")`,
  backgroundImage: `url("./../assets/oldMain.jpg")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  minHeight: '100vh',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export const aboutStyle = {
  //   backgroundImage: `url("/rez/images/wpMain.jpg")`,
  backgroundImage: `url("./../assets/aboutBg.jpg")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}

export const carouselShoes = {
  // backgroundImage: `url("./../assets/carouselShoes.jpg")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '500px',
  width: '100%',
  minWidth: '800px',
}

export const carouselKeys = {
  // backgroundImage: `url("./../assets/carouselKeys.jpg")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '500px',
  width: '100%',
}

export const carouselSharping = {
  // backgroundImage: `url("./../assets/carouselSharping.jpg")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '500px',
  width: '100%',
}

export const pricesStyle = {
  backgroundImage: `url("./../assets/pricesBg.jpg")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  whiteSpace: 'pre-wrap',
}

export const contactsStyle = {
  //   backgroundImage: `url("/rez/images/wpMain.jpg")`,
  backgroundImage: `url("./../assets/contactsBg.jpg")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  overflow: 'hidden',
  margin: '0',
}
export const leftCaret = (
  <svg
    fill='#b9afff'
    style={{ height: '40px' }}
    clipRule='evenodd'
    fillRule='evenodd'
    strokeLinejoin='round'
    strokeMiterlimit='2'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='m22 12.002c0-5.517-4.48-9.997-9.998-9.997-5.517 0-9.997 4.48-9.997 9.997 0 5.518 4.48 9.998 9.997 9.998 5.518 0 9.998-4.48 9.998-9.998zm-8.211-4.843c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591z'
      fillRule='nonzero'
    />
  </svg>
)

export const rightCaret = (
  <svg
    fill='#b9afff'
    style={{ height: '40px' }}
    clipRule='evenodd'
    fillRule='evenodd'
    strokeLinejoin='round'
    strokeMiterlimit='2'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm8.211-4.843c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591z'
      fillRule='nonzero'
    />
  </svg>
)

export const phoneImage = {
  backgroundImage: `url("./../assets/phone.png")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  width: '28px',
  height: '28px',
  display: 'block',
  marginRight: '15px',
}

export const whatsappImage = {
  backgroundImage: `url("./../assets/whatsapp.png")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  width: '28px',
  height: '28px',
  display: 'block',
  marginRight: '15px',
}

export const mailImage = {
  backgroundImage: `url("./../assets/mail.png")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  width: '28px',
  height: '28px',
  display: 'block',
  marginRight: '15px',
}

export const serviceContacts = [
  {
    email: 'rivasiela4@gmail.com',
    phone: '+37129730629',
  },
]

export const mapArrow = (
  <svg
    style={{ marginLeft: '-3px' }}
    xmlns='http://www.w3.org/2000/svg'
    fill='white'
    width='24'
    height='24'
    viewBox='0 0 24 24'
  >
    <path d='M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z' />
  </svg>
)

export const mapClose = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='white'
    width='24'
    height='24'
    viewBox='0 0 24 24'
  >
    <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
  </svg>
)

export const latvian = (
  <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'>
    <rect fill='#9E3039' width='1200' height='25'></rect>
    <rect fill='#fff' y='8' width='1200' height='8'></rect>
  </svg>
)

export const russian = (
  <svg
    style={{ marginTop: '-3px' }}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 6'
    width='30'
    height='30'
  >
    <rect fill='#fff' width='9' height='3' />
    <rect fill='#d52b1e' y='4' width='9' height='3' />
    <rect fill='#0039a6' y='2' width='9' height='3' />
  </svg>
)

export const arrow = (
  <svg
    style={{ transform: 'matrix(-1, 0, 0, 1, 25, 0)' }}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 100 100'
  >
    <g>
      <path
        d='M9.865 82.005c8.634-1.047 17.137-3.036 25.005-6.398 7.857-3.348 15.062-8.085 20.822-14.208 5.801-6.08 10.233-13.346 13.408-21.139 3.188-7.801 5.173-16.106 6.388-24.536l.006-.039a4.504 4.504 0 1 1 8.87 1.533c-1.802 8.928-4.435 17.771-8.395 26.093-3.941 8.309-9.29 16.068-16.047 22.387-6.714 6.372-14.852 11.06-23.383 14.138-8.552 3.096-17.498 4.642-26.404 5.219a1.531 1.531 0 0 1-.288-3.047l.018-.003z'
        fill='#0039a6'
      />
    </g>
    <g>
      <path
        d='M84.505 14.243l7.776 14.97a1.635 1.635 0 0 1-2.561 1.952L77.347 19.698a4.568 4.568 0 1 1 7.158-5.455z'
        fill='#0039a6'
      />
    </g>
    <g>
      <path
        d='M81.742 19.823L66.183 26.34a1.635 1.635 0 0 1-1.735-2.713L76.895 12.24a4.567 4.567 0 1 1 4.847 7.583z'
        fill='#0039a6'
      />
    </g>
  </svg>
)

export const home = (
  <svg
    width='24'
    height='24'
    xmlns='http://www.w3.org/2000/svg'
    fillRule='evenodd'
    clipRule='evenodd'
    fill='#73d8dc'
  >
    <path d='M11 23h-7c-.553 0-.999-.448-.999-1 0-.265.106-.52.293-.707.188-.188.442-.293.708-.293h5.002v-5h5.996v5h5.009c.265 0 .52.105.707.293.188.187.293.442.293.707 0 .552-.456 1-1.009 1h-7l.006-5h-2.006v5zm-4-3h-2.998c-.553 0-1.001-.448-1.001-1s.448-1 1.001-1h2.998v2zm14.009-1c0 .552-.448 1-1 1h-3.001v-2h3.001c.552 0 1 .448 1 1zm-14.009-2h-2.998c-.553 0-1.001-.448-1.001-1v-3l8.985-8c1.313 1.167 2.63 2.333 3.947 3.5l1.129 1c1.318 1.167 2.634 2.333 3.947 3.5v3c0 .552-.448 1-1 1h-3.001v-2h2v-1.113l-7.022-6.211-6.984 6.222-.002 1.102h2v2zm5.005-6c1.105 0 2.001.896 2.001 2s-.896 2-2.001 2c-1.104 0-2.001-.896-2.001-2s.897-2 2.001-2zm-.005-10s9.038 7.911 11.664 10.244c.413.367.45.999.083 1.412-.367.413-.995.445-1.412.083-2.421-2.105-10.343-9.063-10.343-9.063s-7.899 6.893-10.327 9.051c-.413.367-1.045.329-1.412-.083-.367-.413-.33-1.045.083-1.412 2.626-2.333 11.664-10.232 11.664-10.232zm7.005 2h3.001v5.134l-3.001-2.596v-2.538z' />
  </svg>
)

export const about = (
  <svg
    width='24'
    height='24'
    xmlns='http://www.w3.org/2000/svg'
    fillRule='evenodd'
    clipRule='evenodd'
    fill='#73d8dc'
  >
    <path d='M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625l-1.993 6.368 6.946-3c1.705.439 3.334.641 4.864.641 7.174 0 12.136-4.439 12.136-9.634 0-5.812-5.701-10.007-12-10.007m0 1c6.065 0 11 4.041 11 9.007 0 4.922-4.787 8.634-11.136 8.634-1.881 0-3.401-.299-4.946-.695l-5.258 2.271 1.505-4.808c-1.308-1.564-2.165-3.128-2.165-5.402 0-4.966 4.935-9.007 11-9.007' />
  </svg>
)

export const contacts = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='#73d8dc'
  >
    <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z' />
  </svg>
)

export const pricelist = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='#73d8dc'
  >
    <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 3c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9zm1 13.947v1.053h-1v-.998c-1.035-.018-2.106-.265-3-.727l.455-1.644c.956.371 2.229.765 3.225.54 1.149-.26 1.385-1.442.114-2.011-.931-.434-3.778-.805-3.778-3.243 0-1.363 1.039-2.583 2.984-2.85v-1.067h1v1.018c.725.019 1.535.145 2.442.42l-.362 1.648c-.768-.27-1.616-.515-2.442-.465-1.489.087-1.62 1.376-.581 1.916 1.711.804 3.943 1.401 3.943 3.546.002 1.718-1.344 2.632-3 2.864z' />
  </svg>
)
