import { useEffect } from 'react'

function usePageTitle(title: string): void {
  useEffect(() => {
    document.title = `GUIAS - ${title}`
  }, [title])
}

export default usePageTitle
