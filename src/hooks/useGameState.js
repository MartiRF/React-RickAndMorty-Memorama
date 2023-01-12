import { useMemo, useState } from "react"


export const useGameState = (baraja = [],fetch, counter, sizeBoard) => {
  
  const [isWin, setIsWin] = useState(false)
  const [isMenuConfigOpen, setIsMenuConfigOpen] = useState(false)
  const [size, setSize] = useState(6)

  useMemo(() => {
    if(baraja.map(carta => carta.flipped).filter(carta => carta).length >= sizeBoard * 2){
      setIsWin(true)
      return true;
    }else return false;
  },[baraja])

  const newGame = (size) => {
    setSize(size)
    fetch.getData()
    counter.reset()
    setIsWin(false)
  }
  const setting = {
    isMenuConfigOpen,
    setIsMenuConfigOpen
  }
  return {
    isWin,
    setIsWin,
    setting,
    newGame,
    size
  }
}
