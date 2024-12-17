import React from 'react'
import ReactDOM from 'react-dom/client'
import { useEffect } from 'react'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import store from './components/store/store'
import { Provider } from 'react-redux'
// import AdSense from 'react-adsense'


export const root = ReactDOM.createRoot(document.getElementById('root'))

const Ad = () => {
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  }, [])
  return (
    <>
      <ins className="adsbygoogle"
        style={{display:"block", width:"250px"}}
        data-ad-format="fluid"
        data-ad-layout-key="-fb+5w+4e-db+86"
        data-ad-client="ca-pub-3179825736250948"
        data-ad-slot="5242655036"
        >
      </ins>

    </>
  )
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <AdSense.Google
  client='ca-pub-3179825736250948'
  slot='f08c47fec0942fa0'
  style={{ display: 'block' }}
  format='auto'
  responsive='true'
  layoutKey='-gw-1+2a-9x+5c'
/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
