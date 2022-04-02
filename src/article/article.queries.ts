import {useQuery} from 'react-query'

export function useQueryArticles() {
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
