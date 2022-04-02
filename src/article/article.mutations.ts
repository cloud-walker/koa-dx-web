import {useMutation, useQueryClient} from 'react-query'

export function useCreateArticle() {
  const queryClient = useQueryClient()

  return useMutation(
    async data => {
      const res = await fetch(`http://localhost:4000/articles`, {
        method: 'post',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw res
      }

      const body = await res.json()
      return body
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('article')
      },
    },
  )
}
