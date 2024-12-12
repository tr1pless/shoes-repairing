import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import store from './components/store/store'
import { Provider } from 'react-redux'
import AdSense from 'react-adsense'


export const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <AdSense.Google
  client='ca-pub-3179825736250948'
  slot='5242655036'
  style={{ display: 'block' }}
  format='auto'
  responsive='true'
  layoutKey='-gw-1+2a-9x+5c'
/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
