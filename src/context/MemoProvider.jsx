import React, { useMemo } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useCartasClick } from '../hooks/useCartasClick';
import { useCounter } from '../hooks/useCounter';
import { useFetchRickAndMorty } from '../hooks/useFetchRickAndMorty'
import { MemoContex } from './MemoContext'

export const MemoProvider = ({ children }) => {
  const [isMenuConfigOpen, setIsMenuConfigOpen] = useState(false)

  const [ganaste, setGanaste] = useState(false)
  const fetch = useFetchRickAndMorty();
  const counter = useCounter()
  const cartaClick = useCartasClick(fetch.baraja,fetch.setBarajaPrime, counter.increment)


  const isWin =useMemo(() =>{    
    if(fetch.baraja.map(carta => carta.flipped).filter(carta => carta).length >= 12){
      return true;
    }else return false;
  },[fetch])

  useEffect(() => {
    if(isWin){
      setGanaste(true)
    }
  },[isWin])

  const stateGame = {
    isWin,
    ganaste,
    setGanaste,
    isMenuConfigOpen,
    setIsMenuConfigOpen
  }
  return (
    <MemoContex.Provider value={{fetch,counter,cartaClick,stateGame}}>
        { children }
    </MemoContex.Provider>
  )
}
