import { useState, useEffect } from 'react'
export function useCatImage ({ fact }) { // es una buena práctica pasar el fact como objeto
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]
    fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=70&fontColor=blue`)
      .then(res => {
        const { url } = res
        setImageUrl(`${url}`)
      })
  }, [fact])
  return { imageUrl }
}
