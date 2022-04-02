import {useQuery} from 'react-query'
import {Link, Route, Routes, useNavigate} from 'react-router-dom'
import {useId} from 'react'

import './App.css'
import {useQueryArticles} from './article/article.queries'
import {useCreateArticle} from './article/article.mutations'

export function App() {
  return (
    <>
      <h1>Unexpected knowledge</h1>
      <Routes>
        <Route path="/articles/new" element={<AddArticle />} />
        <Route path="*" element={<Articles />} />
      </Routes>
    </>
  )
}

function AddArticle() {
  const navigate = useNavigate()
  const fieldTitleId = useId()
  const fieldContentId = useId()
  const createArticle = useCreateArticle()

  return (
    <form
      method="post"
      onSubmit={e => {
        e.preventDefault()
        const elements = e.currentTarget.elements
        const values = {
          title: elements[0].value,
          content: elements[1].value,
        }
        createArticle.mutate(values, {
          onSuccess: () => {
            navigate('/')
          },
        })
      }}
    >
      <label htmlFor={fieldTitleId}>Title</label>
      <br />
      <input id={fieldTitleId} type="text" name="title" />
      <br />

      <label htmlFor={fieldContentId}>Content</label>
      <textarea
        id={fieldContentId}
        name="content"
        rows={10}
        style={{minWidth: '100%'}}
      />
      <br />
      <input type="submit" />
    </form>
  )
}

function Articles() {
  const queryArticles = useQueryArticles()

  return (
    <>
      <Link to="/articles/new">New article</Link>

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
