import React from 'react'
import { useContext } from 'react'
import { MemoContex } from '../../context/MemoContext'
import { Boton } from '../Boton/Boton'
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
          <Boton>4x3</Boton>
          <Boton>8x6</Boton>
          <Boton>16x12</Boton>
        </div>
      </div>
      <div className='opciones__tableros'>
        <Boton handlerClick={onAplicarConfiguracion}>Aplicar</Boton>
        <Boton handlerClick={onCancelarConfiguracion}>Cancelar</Boton>
      </div>
    </div>
  )
}
