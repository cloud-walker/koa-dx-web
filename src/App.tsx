import {useQuery} from 'react-query'
import {Route, Routes} from 'react-router-dom'

import './App.css'

export function App() {
  return (
    <Routes>
      <Route path="*" element={<Articles />}></Route>
    </Routes>
  )
}

function Articles() {
  const queryArticles = useQueryArticles()

  return (
    <>
      <h1>Unexpected knowledge</h1>

      {queryArticles.isLoading ? (
        <div>Loading articles...</div>
      ) : queryArticles.isError ? (
        <div>Loading articles failed</div>
      ) : (
        <pre>{JSON.stringify(queryArticles.data, null, 2)}</pre>
      )}
    </>
  )
}

function useQueryArticles() {
  return useQuery({
    queryKey: ['articles'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:4000/articles`)

      if (!res.ok) {
        throw res
      }

      const body = await res.json()
      return body
    },
  })
}
