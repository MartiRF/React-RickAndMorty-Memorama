import React, { useState } from 'react'
import { useCounter } from './useCounter'

export const useCartasClick = ( baraja, setBarajaPrime ) => {

  const { counter, increment } = useCounter();

  // console.log(counter)

  const [animating, setAnimating] = useState(false)
  const [cartaActualSelecionada, setCartaActualSelecionada] = useState(null)

  const onClick = ( carta ) => {
    const { index } = carta
    const cartaFlipped = {...carta,flipped:true}
    let barajaCopy = [...baraja]
    barajaCopy[index] = cartaFlipped
    setBarajaPrime(barajaCopy)

    if(cartaActualSelecionada === null){
      setCartaActualSelecionada(carta)
    }

    else if(carta.name === cartaActualSelecionada.name){
      setCartaActualSelecionada(null)
      increment()
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
