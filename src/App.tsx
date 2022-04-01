import {Route, Routes} from 'react-router-dom'

import './App.css'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Blog posts</h1>}></Route>
    </Routes>
  )
}
