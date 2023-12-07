import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

//  Custom hook (son funciones en las que podemos usar hooks)
export const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }
  useEffect(refreshFact, [])//  Nunca olvidar las dependencias

  return { fact, refreshFact }
}
