import React from 'react'
import { useContext } from 'react'
import { MemoContex } from '../../context/MemoContext'

export const Header = () => {
    
  const { counter } = useContext(MemoContex)
  const {fetch} = useContext(MemoContex)


    const reiniciar = () => {
        fetch.getData()
        counter.reset()
    }
  return (
    <header className='header'>
        <div className='header__buttons'>
          <p className='header__buttons_item' onClick={reiniciar}>Reiniciar</p>
          {/* <p className='header__buttons_item'>Sin funcion</p> */}
        </div>
        <h1 className='header__titulo'>Memorama Rick and Morty</h1>
        <h2 className='header__movimientos'> Movimientos: <span>{counter.counter}</span></h2>
   </header>
  )
}
