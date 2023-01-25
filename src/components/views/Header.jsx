import React from 'react'
import { useContext } from 'react'
import { ConfigIco } from '../../assets/icos/ConfigIco'
import { MemoContex } from '../../context/MemoContext'
import { Boton } from '../Boton/Boton'

export const Header = () => {
    
  const { counter, stateGame } = useContext(MemoContex)

  const onOpenMenuConfig = () => {
    stateGame.setting.setIsMenuConfigOpen(true)
  }

  return (
    <header className='header'>
        <div className='btn__container__header'>
          <Boton handlerClick={onOpenMenuConfig}><ConfigIco /></Boton>
          <Boton handlerClick={stateGame.newGame}>Reiniciar</Boton>
        </div>
        <h1 className='header__titulo'>Memorama Rick and Morty</h1>
        <h2 className='header__movimientos'> Movimientos: <span>{counter.counter}</span></h2>
   </header>
  )
}
