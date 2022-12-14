import React, { useContext, useState } from 'react'
import { MemoContex } from '../context/MemoContext';
import { useCounter } from './useCounter'

export const useCartasClick = ( baraja = [], setBarajaPrime, puntajeIncrement ) => {

  const { counter, increment } = useCounter();
  const [animating, setAnimating] = useState(false)
  const [cartaActualSelecionada, setCartaActualSelecionada] = useState(null)
  const [win, setWin] = useState(false)

  // Manejo de click al tocar una carta
  const onClick = ( carta ) => {
    
    const { index } = carta
    const cartaFlipped = {...carta,flipped:true}
    let barajaCopy = [...baraja]
    barajaCopy[index] = cartaFlipped
    setBarajaPrime(barajaCopy)
    
    if(cartaActualSelecionada === null){
      setCartaActualSelecionada(carta)
      puntajeIncrement()
    }

    else if(carta.id === cartaActualSelecionada.id){
      setCartaActualSelecionada(null)
    }

    else{
      setAnimating(true)

      setTimeout(() => {
        const { index } = cartaActualSelecionada
        baraja[ index ] = {...cartaActualSelecionada, flipped:false}

        setBarajaPrime(baraja)
        setCartaActualSelecionada(null)
        setAnimating(false)
        increment()
      },1000)
    }
  }

  return {
    onClick,
    animating,
    counter:counter,
  }
}
