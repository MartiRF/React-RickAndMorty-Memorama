import React from 'react'
import { useCartasClick } from '../hooks/useCartasClick';
import { useCounter } from '../hooks/useCounter';
import { useFetchRickAndMorty } from '../hooks/useFetchRickAndMorty'
import { MemoContex } from './MemoContext'

export const MemoProvider = ({ children }) => {
    const fetch = useFetchRickAndMorty();
    const counter = useCounter()
    const cartaClick = useCartasClick(fetch.baraja,fetch.setBarajaPrime, counter.increment)


  return (
    <MemoContex.Provider value={{fetch,counter,cartaClick}}>
        { children }
    </MemoContex.Provider>
  )
}
