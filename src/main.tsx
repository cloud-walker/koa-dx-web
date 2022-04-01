import React from 'react'
import {createRoot} from 'react-dom/client'

import './index.css'
import {App} from './App'
import {BrowserRouter} from 'react-router-dom'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw Error('Cannot find the rootElement')
}

createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
