import { useMemo, useState } from "react"


export const useGameState = (baraja = [],fetch, counter) => {
  const [isWin, setIsWin] = useState(false)
  const [isMenuConfigOpen, setIsMenuConfigOpen] = useState(false)

  useMemo(() => {
    if(baraja.map(carta => carta.flipped).filter(carta => carta).length >= 12){
      setIsWin(true)
      return true;
    }else return false;
  },[baraja])

  const newGame = (size) => {
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
    newGame
  }
}
