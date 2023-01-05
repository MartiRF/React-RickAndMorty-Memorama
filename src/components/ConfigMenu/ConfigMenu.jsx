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
      <div>
        <h3>Tamaño del tablero</h3>
        <div>
          <p>4x3</p>
          <p>8x6</p>
          <p>16x12</p>
        </div>
      </div>
      <button onClick={onAplicarConfiguracion}>Aplicar</button>
      <button onClick={onCancelarConfiguracion}>Cancelar</button>
    </div>
  )
}
