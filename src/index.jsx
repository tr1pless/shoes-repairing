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

const Ad = props => {
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || []
    window.adsbygoogle.push({})
  })
  
  return (
    <div>
      <ins 
        className="adsbygoogle"
	    style={{display:'inline-block',width:'728px',height:'90px'}}
	    data-ad-client="ca-pub-1234567890123456"
	    data-ad-slot="1234567890"
      />
    </div>
  )
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Ad/>
        {/* <AdSense.Google */}
  {/* client='ca-pub-3179825736250948' */}
  {/* slot='f08c47fec0942fa0' */}
  {/* style={{ display: 'block' }} */}
  {/* format='auto' */}
  {/* responsive='true' */}
  {/* layoutKey='-gw-1+2a-9x+5c' */}
{/* /> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
