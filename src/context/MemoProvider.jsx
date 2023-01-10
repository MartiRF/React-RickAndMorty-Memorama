import React from 'react'

import { useCartasClick } from '../hooks/useCartasClick';
import { useCounter } from '../hooks/useCounter';
import { useFetchRickAndMorty } from '../hooks/useFetchRickAndMorty'
import { useGameState } from '../hooks/useGameState';
import { MemoContex } from './MemoContext'

export const MemoProvider = ({ children }) => {

  const fetch = useFetchRickAndMorty();
  const counter = useCounter()
  const cartaClick = useCartasClick(fetch.baraja,fetch.setBarajaPrime, counter.increment)
  const stateGame = useGameState(fetch.baraja)

  return (
    <MemoContex.Provider value={{fetch,counter,cartaClick,stateGame}}>
        { children }
    </MemoContex.Provider>
  )
}
