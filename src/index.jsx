import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import store from './components/store/store'
import { Provider } from 'react-redux'
import { AdComp } from './components/Adsense/Adsense'



export const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
<AdComp/>

      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
