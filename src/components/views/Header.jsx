import React from 'react'
import { useContext } from 'react'
import { ConfigIco } from '../../assets/icos/ConfigIco'
import { MemoContex } from '../../context/MemoContext'
import { Boton } from '../Boton/Boton'

export const Header = () => {
    
  const { counter, fetch, stateGame } = useContext(MemoContex)

  const onOpenMenu = () => {
    stateGame.setIsMenuConfigOpen(true)
  }
    const reiniciar = () => {
        fetch.getData()
        counter.reset()
    }
  return (
    <header className='header'>
        <div className='btn__container'>
          <Boton handlerClick={onOpenMenu}><ConfigIco /></Boton>
          <Boton handlerClick={reiniciar}>Reiniciar</Boton>
        </div>
        <h1 className='header__titulo'>Memorama Rick and Morty</h1>
        <h2 className='header__movimientos'> Movimientos: <span>{counter.counter}</span></h2>
   </header>
  )
}
