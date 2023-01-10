import React from 'react'
import { useContext } from 'react'
import { MemoContex } from '../../context/MemoContext'
import './ConfigMenu.css'
export const ConfigMenu = () => {

  const {stateGame} = useContext(MemoContex)

  const onAplicarConfiguracion = () => {
    stateGame.setIsMenuConfigOpen(false)
  }

  const onCancelarConfiguracion = () => {
    stateGame.setIsMenuConfigOpen(false)
  }
  return (
    <div className='container__configuracion'>
      <h1>Configuracion</h1>
      <div className='size__tableros'>
        <h3>Tamaño del tablero</h3>
        <div className='opciones__tableros'>
          <p className='header__buttons_item'>4x3</p>
          <p className='header__buttons_item'>8x6</p>
          <p className='header__buttons_item'>16x12</p>
        </div>
      </div>
      <div className='opciones__tableros'>
        <button className='header__buttons_item' onClick={onAplicarConfiguracion}>Aplicar</button>
        <button className='header__buttons_item' onClick={onCancelarConfiguracion}>Cancelar</button>
      </div>
    </div>
  )
}
