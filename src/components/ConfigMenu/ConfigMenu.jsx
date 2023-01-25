import React from 'react'
import { useContext } from 'react'
import { MemoContex } from '../../context/MemoContext'
import { Boton } from '../Boton/Boton'
import './ConfigMenu.css'
export const ConfigMenu = () => {

  const {stateGame, fetch, counter} = useContext(MemoContex)

  

  const onAplicarConfiguracion = () => {
    stateGame.setIsMenuConfigOpen(false)
  }

  const onCancelarConfiguracion = () => {
    stateGame.setIsMenuConfigOpen(false)
  }

  const onChangeSizeBoard = (size) => {
    fetch.setSize(size)
    stateGame.setting.setIsMenuConfigOpen(false)
    counter.reset()
  }
  return (
    <div className='container__configuracion'>
      <h1>Configuracion</h1>
      <div className='size__tableros'>
        <h3>Tamaño del tablero</h3>
        <div className='opciones__tableros'>
          <Boton handlerClick={() => onChangeSizeBoard(3)}>FACIL</Boton>
          <Boton handlerClick={() => onChangeSizeBoard(6)}>Normal</Boton>
          <Boton handlerClick={() => onChangeSizeBoard(12)}>Dificil</Boton>
        </div>
      </div>
      {/* <div className='opciones__tableros'>
        <Boton handlerClick={onAplicarConfiguracion}>Aplicar</Boton>
        <Boton handlerClick={onCancelarConfiguracion}>Cancelar</Boton>
      </div> */}
    </div>
  )
}
