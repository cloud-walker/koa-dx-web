import React from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from 'react-query'

import './index.css'
import {App} from './App'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw Error('Cannot find the rootElement')
}

createRoot(rootElement).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
