import { useMemo, useState } from "react"


export const useGameState = (baraja = []) => {
  const [isWin, setIsWin] = useState(false)
  useMemo(() => {
    if(baraja.map(carta => carta.flipped).filter(carta => carta).length >= 12){
      setIsWin(true)
      return true;
    }else return false;
  },[baraja])


  return {
    isWin,
    setIsWin,
  }
}
