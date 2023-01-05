import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { ConfigIco } from '../../assets/icos/ConfigIco'
import { MemoContex } from '../../context/MemoContext'
import { ConfigMenu } from '../ConfigMenu/ConfigMenu'

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
          <div className='header__buttons'>
          <p className='header__buttons_item' onClick={onOpenMenu}><ConfigIco /></p>
          <p className='header__buttons_item' onClick={reiniciar}>Reiniciar</p>
        </div>
        <h1 className='header__titulo'>Memorama Rick and Morty</h1>
        <h2 className='header__movimientos'> Movimientos: <span>{counter.counter}</span></h2>
   </header>
  )
}
